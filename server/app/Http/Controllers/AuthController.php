<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Interest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Mail;

class AuthController extends Controller
{

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function register(Request $request)
    {
        $confirmation_code = Str::random(15);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'confirmation_code' => $confirmation_code,
            'genders_id' => $request->genders_id,
            // 'interested_in' => Interest::Interest('genders_id'),
            'location' => $request->location,
            'age' => $request->age,
            'bio' => $request->bio,
            'profile_img' => $request->profile_img
        ]);

        // Mail::send('auth.emails.user-confirmation', ['name' => $name, 'confirmation_code' => $user['confirmation_code']], function ($message) use ($email, $name) {
        //     $message->from('mymail@gmail.com', 'Name Family')->to($email, $name)->subject('Confirm email');
        // });
        return response()->json([
            "status" => "success",
            "data" => "User successfully created"
        ]);
    }

    public function checkCode(Request $request)
    {
        $data = $request->all();
        $usersCount = User::where('confirmation_code', $data['confirmation_code'])->count();
        if ($usersCount > 0) {
            echo 'false';
        } else {
            echo 'true';
        }
    }

    public function checkEmail(Request $request)
    {
        $data = $request->all();
        $usersCount = User::where('email', $data['email'])->count();
        if ($usersCount > 0) {
            echo 'false';
        } else {
            echo 'true';
        }
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}

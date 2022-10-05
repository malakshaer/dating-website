<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Gender;
use App\Models\Favorite;
use App\Models\Message;
use App\Models\InterestedInGender;
use App\Models\BlockedUser;
use App\Http\Controllers\Auth;


class LandingController extends Controller
{
    function getUsers()
    {
        return User::where("location", "Lebanon")->get();
    }

    function getFavorite()
    {
        return Favorite::all();
    }

    function search($name)
    {
        $result = User::where('name', 'LIKE', '%' . $name . '%')->get();
        if (count($result)) {
            return Response()->json($result);
        } else {
            return response()->json(['Result' => 'No Data not found'], 404);
        }
    }

    function getUser($id)
    {

        return User::where("id", "=", $id)->get();
    }


    function addFavorite(Request $request)
    {

        Favorite::create([
            'users_id' => $request->users_id,
            'users_genders_id' => $request->users_genders_id,

        ]);

        return back()->with('success', 'User successfully created');
    }

    public function updateUserProfile(Request $request)
    {
        $data = $request->all();
        User::where('id', $data['id'])->update([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'genders_id' => $data['genders_id'],
            'location' => $data['location'],
            'age' => $data['age'],
            'bio' => $data['bio'],
            'profile_img' => $data['profile_img'],

        ]);

        $data[] = [
            'status' => 200,
            'message' => 'Profile Updated'
        ];
        return response()->json($data);
    }

    public function viewProfile($email)
    {

        $user = User::with([
            'name', 'email', 'password', 'gender', 'interested_in', 'location', 'age', 'bio'
        ])->where('email', $email)->first();

        $user = json_decode(json_encode($user));
    }

    public function replies()
    {

        $receiver_id = User::user()->id;
        $replies = Message::where('receiver_id', $receiver_id)->orderBy('id', 'Desc')->get();

        return response()->json($replies);
    }

    public function sendMessages()
    {


        $sender_id = User::user()->id;

        $send_message = Message::where('sender_id', $sender_id)->orderBy('id', 'Desc')->get();
        $send_message = json_decode(json_encode($send_message));
    }
}

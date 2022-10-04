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


    // function updateUserProfile(Request $request, $id)
    // {

    //     User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => $request->password,
    //         'genders_id' => $request->genders_id,
    //         'location' => $request->location,
    //         'age' => $request->age,
    //         'bio' => $request->bio,
    //         'profile_img' => $request->profile_img
    //     ])->where('id', '=', $id);

    //     return back()->with('message', 'Profile Updated');
    // }

    public function updateUserProfile($id, Request $request)
    {
        $user = User::find($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->genders_id = $request->genders_id;
        $user->location = $request->location;
        $user->age = $request->age;
        $user->bio = $request->bio;
        $user->profile_img = $request->profile_img;

        $user->save();

        $data[] = [
            'id' => $user->id,
            'name' => $user->name,
            'status' => 200,
        ];
        return response()->json($data);
    }

    function getMessage()
    {
        return Message::where('id', '=', 'receiver_id');
    }

    function sendMessage(Request $request)
    {

        Message::create([
            'message' => $request->message
        ]);

        return back()->with('success', 'Message successfully sent');
    }
}

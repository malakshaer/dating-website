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

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use  App\Http\Requests\StoreUserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function registerNewUser(StoreUserRequest  $request)
    {

        // echo "hello";
        $newUser = User::create([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);
        return $newUser;
    //     if ($newUser) {
    //         event(new Registered($newUser));
    //         $newUser["Please complete the validation"] = "An Email has been sent to your mail, Please verify your mail";
    //         return $newUser;
    // }else
    // {
    //     return response()
    //             ->json(['message' => 'An error ocurred while registering your information!']);
    // }
    }
    public function login(Request $request){

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        else{
           return  [$user->createToken($request->email)->plainTextToken,$user];
        }

    }

    public function getDataUser(){
        $user = User::all();
    }

    public function getDataUserId($Id){
        $user = User::find($Id);
    }

}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\AuthController;


Route::group(["prefix" => "auth"], function () {

    Route::group(["middleware" => "auth:api"], function () {
        Route::get("/logout", [LandingController::class, "logout"]);
        Route::get("/refresh", [LandingController::class, "refresh"]);
        Route::get("/getUsers", [LandingController::class, "getUsers"]);
        Route::get("/getUser/{id}", [LandingController::class, "getUser"]);
        Route::get("/search/{name}", [LandingController::class, "search"]);
        Route::get("/getFavorite", [LandingController::class, "getFavorite"]);
        Route::get("/replies/{receiver_id}", [LandingController::class, "replies"]);
        Route::get("/viewProfile/{email}", [LandingController::class, "viewProfile"]);


        Route::post("/updateReply", [LandingController::class, "updateReply"]);
        Route::post("/addFavorite", [LandingController::class, "addFavorite"]);
        Route::post("/deleteReply/{id}", [LandingController::class, "deleteReply"]);
        Route::post("/sendMessage/{sender_id}", [LandingController::class, "sendMessage"]);
        Route::post("/updateUserProfile/{data}", [LandingController::class, "updateUserProfile"]);
    });


    Route::post("/register", [AuthController::class, "register"]);
    Route::post("/login", [AuthController::class, "login"]);
    Route::post("/checkCode/{confirmation_code}", [AuthController::class, "checkCode"]);
    Route::post("/checkEmail/{Email}", [AuthController::class, "checkEmail"]);
});

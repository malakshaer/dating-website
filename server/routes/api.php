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
        Route::get("/getFavorite", [LandingController::class, "getFavorite"]);
        Route::get("/search/{name}", [LandingController::class, "search"]);
        Route::get("/getUser/{id}", [LandingController::class, "getUser"]);
        Route::get("/getMessage", [LandingController::class, "getMessage"]);
        Route::post("/addFavorite", [LandingController::class, "addFavorite"]);
        Route::post("/updateUserProfile/{id}", [LandingController::class, "updateUserProfile"]);
        Route::post("/sendMessage", [LandingController::class, "sendMessage"]);
    });

    Route::post("/register", [AuthController::class, "register"]);
    Route::post("/login", [AuthController::class, "login"]);
    Route::post("/checkCode/{code}", [AuthController::class, "checkCode"]);
});

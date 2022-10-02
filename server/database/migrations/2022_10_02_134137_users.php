<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('confirmation_code');
            $table->timestamps();
            $table->integer('age');
            $table->integer('height');
            $table->string('bio');
            $table->text('location');
            $table->integer("genders_id")->references('id')->on("genders");
        });

        Schema::create('genders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('interested_in_gender', function (Blueprint $table) {
            $table->id();
            $table->integer("users_id")->references('id')->on("users");
            $table->integer("genders_id")->references('id')->on("genders");
        });

        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("users_id")->references('id')->on("users");
            $table->integer("users_genders_id")->references('id')->on("genders");
        });

        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("users_id")->references('id')->on("users");
        });

        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('message');
            $table->integer("sender_id")->references('id')->on("users");
            $table->integer("receiver_id")->references('id')->on("users");
        });

        Schema::create('blocked_users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("users_id")->references('id')->on("users");
            $table->integer("users_id_blocked")->references('id')->on("users");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('genders');
        Schema::dropIfExists('interested_in_gender');
        Schema::dropIfExists('favorites');
        Schema::dropIfExists('images');
        Schema::dropIfExists('messages');
        Schema::dropIfExists('blocked_users');
    }
};

<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CastMember;
use App\Models\Video;
use Faker\Generator as Faker;

$factory->define(CastMember::class, function (Faker $faker) {
    $types = [CastMember::TYPE_DIRECTOR, CastMember::TYPE_ACTOR];
    return [
        'name' => $faker->lastName,
        'type' => $types[array_rand($types)]
    ];

    // $rating = Video::RATING_LIST[array_rand(Video::RATING_LIST)];
    // return [

    // ]

});

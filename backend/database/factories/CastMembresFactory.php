<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CastMembers;
use App\Models\CastMembres;
use Faker\Generator as Faker;

$factory->define(CastMembres::class, function (Faker $faker) {
    $types = [CastMembers::TYPE_DIRECTOR, CastMembers::TYPE_ACTOR];
    return [
        'name' => $faker->lastName,
        'type' => $types[array_rand($types)]
    ];
});

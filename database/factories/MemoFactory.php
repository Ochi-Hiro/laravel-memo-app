<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MemoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id'=>$this->faker->numberBetween(1,4),
            'title'=>$this->faker->word,
            'content'=>$this->faker->text
        ];
    }
}

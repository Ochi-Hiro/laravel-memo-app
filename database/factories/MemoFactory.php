<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MemoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title'=>$this->faker->word,
            'content'=>$this->faker->text
        ];
    }
}

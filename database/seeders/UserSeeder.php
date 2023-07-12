<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
            'name' => 'test',
            'email' => 'test@test.com',
            'password' => Hash::make('password123'),
            'created_at' => '2023/06/23 21:19:00'
            ],
            [
            'name' => 'test2',
            'email' => 'test2@test.com',
            'password' => Hash::make('password123'),
            'created_at' => '2023/06/24 21:19:00'
            ],
            [
            'name' => 'test3',
            'email' => 'test3@test.com',
            'password' => Hash::make('password123'),
            'created_at' => '2023/06/25 21:19:00'
            ],
            [
            'name' => 'test4',
            'email' => 'test4@test.com',
            'password' => Hash::make('password123'),
            'created_at' => '2023/06/26 21:19:00'
            ],
                
        ]);
    }
}

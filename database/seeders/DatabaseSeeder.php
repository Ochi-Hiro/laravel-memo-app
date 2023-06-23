<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Memo;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
        ]);
        
        Memo::factory(20)->create();
    }
    
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        DB::table('item_categories')->insert([
            ['name' => 'Single-Shot Guns'],
            ['name' => 'Semi-Automatic Guns'],
            ['name' => 'Fully Automatic Guns'],
            ['name' => 'Handguns'],
            ['name' => 'Rifles'],
            ['name' => 'Shotguns'],
            ['name' => 'Military Guns'],
            ['name' => 'Hunting Guns'],
            ['name' => 'Self-Defense Guns'],
            ['name' => 'Sporting Guns']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_categories');
    }
}

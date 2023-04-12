<?php

namespace Tests\Feature;

use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function testHasRole()
    {
        $role = Role::create(['name' => 'admin']);

        $user = User::factory()->create();
        $user->assignRole($role->name);

        $this->assertTrue($user->hasRole($role->name));
    }
}

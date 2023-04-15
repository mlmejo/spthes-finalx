<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The roles that are associated to this user.
     *
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Assigns a role to the user.
     *
     */
    public function assignRole(string $roleName)
    {
        $role = Role::where('name', $roleName)->first();

        if (!$role) {
            throw new \Exception("Role '$roleName' does not exist.");
        }

        if ($this->roles->contains($role)) {
            throw new \Exception("User has already the $roleName role.");
        }

        $this->roles()->attach($role);
    }

    /**
     * Check whether the user has a given role.
     *
     */
    public function hasRole(string $roleName): bool
    {
        $count = $this->roles()->where('name', $roleName)->count();

        return $count > 0;
    }

    public function student(): HasOne
    {
        return $this->hasOne(Student::class);
    }


    public function teacher(): HasOne
    {
        return $this->hasOne(Teacher::class);
    }
}

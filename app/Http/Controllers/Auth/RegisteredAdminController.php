<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredAdminController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            'forAdmin' => true,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => [
                'required',
                'confirmed',
                Password::defaults(),
            ],
        ]);

        return redirect()->route(RouteServiceProvider::HOME);
    }
}

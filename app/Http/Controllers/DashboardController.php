<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if ($request->user()->hasRole(Role::Admin->value)) {
            return Inertia::render('Admin/Dashboard');
        } else if ($request->user()->hasRole(Role::Student->value)) {
            return Inertia::render('Students/Dashboard');
        } else if ($request->user()->hasRole(Role::Teacher->value)) {
            return Inertia::render('Teachers/Dashboard');
        }
    }
}

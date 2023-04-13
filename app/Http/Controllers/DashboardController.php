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
        if ($request->user()->hasRole(Role::ADMIN->value)) {
            return Inertia::render('Admin/Dashboard');
        } else if ($request->user()->hasRole(Role::STUDENT->value)) {
            return Inertia::render('Students/Dashboard');
        } else if ($request->user()->hasRole(Role::TEACHER->value)) {
            return Inertia::render('Teachers/Dashboard');
        }
    }
}

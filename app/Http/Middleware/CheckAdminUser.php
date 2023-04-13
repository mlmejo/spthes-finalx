<?php

namespace App\Http\Middleware;

use App\Enums\Role;
use App\Models\User;
use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAdminUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $adminCount = User::whereHas('roles', function (Builder $query) {
            $query->where('name', Role::ADMIN->value);
        })->count();

        if ($adminCount > 0) {
            return redirect()->route('login');
        }

        return $next($request);
    }
}

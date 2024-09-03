<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register()
    {
        return view('authentication/sign-up');
    }

    public function login()
    {
        return view('authentication/login');
    }

    public function forget_password()
    {
        return view('authentication/forget-password');
    }
}

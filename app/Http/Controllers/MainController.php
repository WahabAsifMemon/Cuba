<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('dashboard.index');
    }


    public function projects()
    {
        return view('project.projects');
    }

    public function projectCreate()
    {
        return view('project.projectcreate');
    }

    public function estimates()
    {
        return view('estimate.estimate');
    }

    // public function projectCreate()
    // {
    //     return view('project.projectcreate');
    // }
}

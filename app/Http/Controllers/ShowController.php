<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use DB;

class ShowController extends Controller
{
    public function index()
    {
       return view('index');
    }

    public function getData()
    {
        $data = DB::table('projects')->orderBy('id', 'desc')->get();
        return $data;
    }

}

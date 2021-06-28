<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::resource('projects', 'ProjectController')->middleware('auth');
// Route::get('projects', 'ProjectController@index')->middleware('auth');
// Route::post('projects', 'ProjectController@store')->middleware('auth');
// Route::get('projects/create', 'ProjectController@create')->middleware('auth');
// Route::get('projects/{project}', 'ProjectController@show')->middleware('auth');
// Route::patch('projects/{project}', 'ProjectController@update')->middleware('auth');
// Route::delete('projects/{project}', 'ProjectController@destroy')->middleware('auth');
// Route::get('projects/{project}/edit', 'ProjectController@edit')->middleware('auth');

Route::get('/getdata', 'ShowController@getData')->middleware('cors');

Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
// Route::get('/', 'ShowController@index');
// Route::get('/getdata', 'ShowController@getData');

// Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');
// Route::resource('projects', 'ProjectController')->middleware('auth');



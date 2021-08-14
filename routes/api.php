<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TerapisController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register',[AuthController::class, 'register']);
Route::post('/register-terapis', [AuthController::class, 'registerTerapis']);
Route::post('/login',[AuthController::class, 'login']);

Route::middleware('auth:api')->group(function(){
    Route::get('/logout', [AuthController::class, 'logout']);
    
    Route::prefix('/konsultasi')->group(function(){
        Route::post('/getTerapists', [TerapisController::class, 'getTerapists']);
        Route::post('/getAvailableDates', [TerapisController::class, 'getAvailableDates']);
        Route::post('/chooseJadwalKonsultasi', [TerapisController::class, 'chooseJadwalKonsultasi']);
    });
});

Route::fallback(function(){
    abort(404);
});
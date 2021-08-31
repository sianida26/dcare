<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AppController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TerapisController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\MonitoringController;
use App\Http\Controllers\KonsultasiController;
use App\Http\Controllers\KurikulumController;

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

    Route::post('/init', [AppController::class, 'init']);
    Route::post('/submitDisabilityForm', [AppController::class, 'submitDisabilityForm']);

    Route::prefix('/inbox')->group(function(){
        Route::get('getInboxes', [InboxController::class, 'getInboxes']);
    });

    Route::prefix('terapist')->group(function(){
        Route::post('/findNearby', [TerapisController::class, 'findNearby']);
    });
    
    Route::prefix('/konsultasi')->group(function(){
        Route::post('/getTerapists', [TerapisController::class, 'getTerapists']);
        Route::post('/getAvailableDates', [TerapisController::class, 'getAvailableDates']);
        Route::post('/chooseJadwalKonsultasi', [TerapisController::class, 'chooseJadwalKonsultasi']);
        Route::post('/getChatId', [KonsultasiController::class, 'getChatId']);
    });

    Route::prefix('/monitoring')->group(function(){
        Route::post('/buatLaporan', [MonitoringController::class,'buatLaporan']);
        Route::post('/getLaporanPerBulan', [MonitoringController::class,'getLaporanPerBulan']);
    });

    Route::prefix('/kurikulum')->group(function(){
        Route::post('/getData', [KurikulumController::class, 'getData']);
    });
});

Route::fallback(function(){
    abort(404);
});
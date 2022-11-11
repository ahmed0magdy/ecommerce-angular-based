<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("orders",[OrderController::class,'order']);
Route::get("orders/{order}",[OrderController::class,'orderview']);
Route::post("orders/{order}",[OrderController::class,'updatestatus']);
Route::post("orders",[OrderController::class,'store']);


Route::post("/signup", [UserController::class, 'registerNewUser']);
Route::post("/login", [UserController::class, 'login']);


Route::get("products",[ProductController::class,'index']);
Route::get("products/{product}",[ProductController::class,'show']);
Route::post("products",[ProductController::class,'store']);
// Route::post("products",[ProductController::class,'store']);
Route::get('/products/{product}/edit',[ProductController::class,'edit']);
Route::post('/products/{product}',[ProductController::class,'update']);
Route::delete('/products/{product}',[ProductController::class,'destroy']);


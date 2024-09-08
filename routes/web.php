<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;


Route::get('/', function () {
    return redirect()->route('index');
})->name('/');

//Language Change
Route::get('lang/{locale}', function ($locale) {
    if (! in_array($locale, ['en', 'de', 'es','fr','pt', 'cn', 'ae'])) {
        abort(400);
    }   
    Session()->put('locale', $locale);
    Session::get('locale');
    return redirect()->back();
})->name('lang');
    
Route::prefix('dashboard')->group(function () {
    Route::get('index', [MainController::class, 'index'])->name('index');

});



Route::prefix('order')->group(function () {
    Route::get('new_order', [MainController::class, 'newOrder'])->name('newOrder');
    Route::get('new_vendor', [MainController::class, 'newVendor'])->name('newVendor');
    Route::get('new_patch', [MainController::class, 'newPatch'])->name('newPatch');

    Route::get('view_order', [MainController::class, 'viewOrder'])->name('viewOrder');
    Route::get('view_vendor', [MainController::class, 'viewVendor'])->name('viewVendor');
    Route::get('view_patch', [MainController::class, 'viewPatch'])->name('viewPatch');


});

Route::prefix('quote')->group(function () {
    Route::get('new_quote', [MainController::class, 'newQuote'])->name('newQuote');
    Route::get('new_vendor_quote', [MainController::class, 'newVendorQuote'])->name('newVendorQuote');
    Route::get('new_patch_quote', [MainController::class, 'newPatchQuote'])->name('newPatchQuote');

    Route::get('view_quote', [MainController::class, 'viewQuote'])->name('viewQuote');
    

});

Route::prefix('balance')->group(function () {
    Route::get('billing', [MainController::class, 'billing'])->name('billing');
});

Route::prefix('support')->group(function () {
    Route::get('create_support', [MainController::class, 'createTicket'])->name('createTicket');
    Route::get('view_ticket', [MainController::class, 'viewTicket'])->name('viewTicket');

});










Route::prefix('authentication')->group(function () {
    Route::get('register', [AuthController::class, 'register'])->name('sign-up');
    Route::get('login', [AuthController::class, 'login'])->name('login');
    Route::get('forget-password', [AuthController::class, 'forget_password'])->name('forget-password');
});


Route::view('support-ticket', 'apps.support-ticket')->name('support-ticket');


Route::get('layout-{light}', function($light){
    session()->put('layout', $light);
    session()->get('layout');
    if($light == 'vertical-layout')
    {
        return redirect()->route('pages-vertical-layout');
    }
    return redirect()->route('index');
    return 1;
});
Route::get('/clear-cache', function() {
    Artisan::call('config:cache');
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Cache is cleared";
})->name('clear.cache');
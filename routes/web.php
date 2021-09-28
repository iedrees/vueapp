<?php

 

require __DIR__.'/auth.php';

Route::get('/{any?}', function () {
    return view('webapp');
})->middleware(['auth'])->where('any', '.*');
 
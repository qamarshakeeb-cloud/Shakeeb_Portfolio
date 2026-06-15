<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

Route::post('/contact', function (Request $request) {
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'message' => 'required|string',
    ]);

    Mail::to('mdshakeebqamar@gmail.com')->send(new ContactFormMail($data));

    return response()->json([
        'message' => 'Message sent successfully. Please check your email.'
    ]);
});

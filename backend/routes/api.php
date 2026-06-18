<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/contact', function (Request $request) {

    return response()->json([
        'message' => 'TEST SUCCESS'
    ]);

});

Route::post('/chat', function (Request $request) {

    $client = OpenAI::client(env('OPENAI_API_KEY'));

    $question = $request->input('message');

    $response = $client->chat()->create([
        'model' => 'gpt-5-mini',
        'messages' => [
            [
                'role' => 'system',
                'content' => '
You are Shakeeb AI.

Information about Shakeeb:

- MSc Space Engineering
- Mechanical Engineer
- Python
- React
- Laravel
- CAD
- FEM
- ANSYS
- Built a React + Laravel portfolio website
- Uses Git and GitHub

Only answer questions related to Shakeeb.

If the question is unrelated, say:

"I can only answer questions about Shakeeb. Please contact him directly."
'
            ],
            [
                'role' => 'user',
                'content' => $question
            ]
        ]
    ]);

    return response()->json([
        'reply' => $response->choices[0]->message->content
    ]);
});
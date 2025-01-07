<?php

// app/Http/Controllers/NewsController.php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Protektora;
use Illuminate\Http\Request;
use App\Models\Translation;

class NewsController extends Controller
{
    // Crear una noticia
    public function store(Request $request)
    {

	try {
        	// Validación de los campos de texto y título en ambos idiomas
	        $request->validate([
        	    'titleES' => 'required|string',
	            'titleEU' => 'required|string',
	            'textES' => 'required|string',
	            'textEU' => 'required|string',
		    'img' => 'required|url',
	        ]);
	    } catch (\Illuminate\Validation\ValidationException $e) {
	        return response()->json([
	            'message' => 'Error de validación',
	            'errors' => $e->errors(),
	        ], 422);
	    }

        if (!auth()->check()) {
        	return response()->json(['message' => 'No autenticado'], 401);
    	}

        // Obtener el usuario autenticado
        $user = auth()->user();

        // Obtener el 'protektora_id' del usuario autenticado
        $protektora_id = $user->idProtektora;

        if (!$protektora_id) {
            return response()->json([
                'message' => 'Este usuario no tienes permisos para crear usuarios.',
            ], 403);
        }

        // Crear la noticia
        $news = new News();
        $news->protektora = $protektora_id;
	    $news->img = $request->input('img');
        $news->save(); // Guardamos la noticia en la base de datos, para obtener el ID

        // Obtener el ID de la noticia recién creada
        $news_id = $news->id;

        // Crear las traducciones para el título
        // En español
        $title_es = Translation::create([
            'keyValue' => 'title' . $news_id,
            'language' => 'es',
            'value' => $request->input('titleES'),
        ]);

        // En euskera
        $title_eu = Translation::create([
            'keyValue' => 'title' . $news_id,
            'language' => 'eu',
            'value' => $request->input('titleEU'),
        ]);

        // Crear las traducciones para el texto
        // En español
        $text_es = Translation::create([
            'keyValue' => 'news' . $news_id,
            'language' => 'es',
            'value' => $request->input('textES'),
        ]);

        // En euskera
        $text_eu = Translation::create([
            'keyValue' => 'news' . $news_id,
            'language' => 'eu',
            'value' => $request->input('textEU'),
        ]);

        // Actualizamos los campos en la tabla `news` con las claves de traducción
        $news->title = $title_es->keyValue;  // Clave que apunta al título en español
        $news->text = $text_es->keyValue;    // Clave que apunta al texto en español
        $news->save();  // Guardamos nuevamente la noticia con las claves

        // Retornar la respuesta
        return response()->json([
            'message' => 'Noticia creada con éxito',
            'news' => $news
        ], 201);
    }
    // Actualizar una noticia
public function update(Request $request, News $news)
{
    try {
        // Validación de los campos de texto y título en ambos idiomas
        $request->validate([
            'titleES' => 'required|string',
            'titleEU' => 'required|string',
            'textES' => 'required|string',
            'textEU' => 'required|string',
            'img' => 'required|url',
        ]);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'message' => 'Error de validación',
            'errors' => $e->errors(),
        ], 422);
    }

    if (!auth()->check()) {
        return response()->json(['message' => 'No autenticado'], 401);
    }

    // Obtener el usuario autenticado
    $user = auth()->user();

    // Obtener el 'protektora_id' del usuario autenticado
    $protektora_id = $user->idProtektora;

    // Verificar que el usuario tiene permisos para actualizar la noticia
    if ($news->protektora !== $protektora_id) {
        return response()->json([
            'message' => 'No tienes permisos para actualizar esta noticia.',
        ], 403);
    }

    // Actualizar la noticia
    $news->img = $request->input('img');
    
    // Actualizar las traducciones para el título
    // En español
    $title_es = Translation::where('keyValue', 'title' . $news->id)
        ->where('language', 'es')
        ->first();
    $title_es->value = $request->input('titleES');
    $title_es->save();

    // En euskera
    $title_eu = Translation::where('keyValue', 'title' . $news->id)
        ->where('language', 'eu')
        ->first();
    $title_eu->value = $request->input('titleEU');
    $title_eu->save();

    // Actualizar las traducciones para el texto
    // En español
    $text_es = Translation::where('keyValue', 'news' . $news->id)
        ->where('language', 'es')
        ->first();
    $text_es->value = $request->input('textES');
    $text_es->save();

    // En euskera
    $text_eu = Translation::where('keyValue', 'news' . $news->id)
        ->where('language', 'eu')
        ->first();
    $text_eu->value = $request->input('textEU');
    $text_eu->save();

    // Actualizamos los campos en la tabla `news` con las claves de traducción
    $news->title = $title_es->keyValue;  // Clave que apunta al título en español
    $news->text = $text_es->keyValue;    // Clave que apunta al texto en español
    $news->save();  // Guardamos nuevamente la noticia con las claves actualizadas

    // Retornar la respuesta
    return response()->json([
        'message' => 'Noticia actualizada con éxito',
        'news' => $news
    ], 200);
    }
    // Eliminar una noticia
    public function destroy(News $news)
    {
        $news->delete();

        return response()->json(['message' => 'Noticia eliminada con éxito.']);
    }
}

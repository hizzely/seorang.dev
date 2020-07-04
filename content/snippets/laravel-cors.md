---
title: Laravel Simple CORS Middleware
description: Sebuah middleware yang simpel untuk fix masalah CORS dengan cepat.
icon: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png
tags: [laravel, php]
---
```
<?php
namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /**
         * Handle Preflight
         * 
         * Preflight adalah request yang akan dikirim browser sebelum mengirim
         * request ke route yang diproteksi dengan CORS. Pada dasarnya, browser
         * ingin tau kalau aplikasi / webserver kita tau cara menangani request
         * CORS dengan memberi kode respon 204 dan tambahan header seperti:
         * - Access-Control-Allow-Methods
         * - Access-Control-Allow-Headers
         * Untuk memberi tanda HTTP Method dan Header apa yang boleh ada
         * atau dipake di request yang dikirim.
         *
         * Untuk lebih detailnya:
         * https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
         */
        if ($request->isMethod('OPTIONS')) {
            return response('')->setStatusCode(204)->withHeaders([
                'Access-Control-Allow-Origin'      => '*',
                'Access-Control-Allow-Methods'     => 'POST, GET, PUT, PATCH, OPTIONS, DELETE',
                'Access-Control-Max-Age'           => '600',
                'Access-Control-Allow-Headers'     => 'Authorization, Content-Type, Accept'
            ]);
        }

        /**
         * Selama browser masih mengingat respon preflight kita sebelumnya alias
         * masih dalam durasi Max-Age sejak request preflight terakhir, maka kita
         * bisa mengirimkan paling tidak header Allow-Origin saja. Tergantung
         * dari kebijakan dan kebutuhan, kamu mungkin ngga ingin pakai wildcard
         * dikonfigurasi ini.
         */
        return $next($request)->header('Access-Control-Allow-Origin', '*');
    }
}
```
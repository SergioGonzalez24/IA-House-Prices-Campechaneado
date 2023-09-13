import 'dart:io' show Platform; // Importa la clase Platform

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false, // Oculta el banner de debug
      home: MyWebView(),
    );
  }
}

class MyWebView extends StatelessWidget {
  const MyWebView({super.key});

  @override
  Widget build(BuildContext context) {
    // Determina la altura de la barra de herramientas según la plataforma
    double toolbarHeight = Platform.isIOS ? 0 : 10;

    return Scaffold(
      appBar: AppBar(
        toolbarHeight:
            toolbarHeight, // Establece la altura de la barra de herramientas
        elevation: 0,
        backgroundColor: Colors.black,
      ),
      body: const WebView(
        initialUrl:
            'https://housea-git-dev-sergiogonzalez24.vercel.app/', // Cambiar a la URL de la aplicación
        javascriptMode:
            JavascriptMode.unrestricted, // Habilita la ejecución de JavaScript
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mi Aplicación Web',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyWebView(),
    );
  }
}

class MyWebView extends StatelessWidget {
  const MyWebView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mi Aplicación Web'),
      ),
      body: const WebView(
        initialUrl: 'https://campechaneado.vercel.app/',
        javascriptMode:
            JavascriptMode.unrestricted, // Habilita la ejecución de JavaScript
      ),
    );
  }
}

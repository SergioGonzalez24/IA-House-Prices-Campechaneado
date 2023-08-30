from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, mundo! Esta es mi aplicación Flask.'

if __name__ == '__main__':
    app.run()


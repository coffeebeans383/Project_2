from flask import Flask, render_template
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD']= True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/wifi")
def index_wifi():
    return render_template("index-wifi.html")

@app.route("/park")
def index_park():
    return render_template("index-park.html")

if __name__ == "__main__":
    app.run()
from flask import Flask, render_template
app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD']= True

@app.route("/")
def index():
    return render_template("index.html")

<<<<<<< HEAD
@app.route("/wifi")
def index_wifi():
    return render_template("index-wifi.html")

@app.route("/park")
def index_park():
    return render_template("index-park.html")

@app.route("/music")
def index_music():
    return render_template("index-music.html")

@app.route("/art")
def index_art():
    return render_template("index-art.html")

@app.route("/buses")
def index_buses():
    return render_template("index-buses.html")

#@app.route("/crime")
#def index_crime():
    #return render_template("index-crime.html")

@app.route("/strip")
def index_strip():
    return render_template("index-strip.html")

#@app.route("/traffic")
#def index_traffic():
   # return render_template("index-traffic.html")

@app.route("/entertainment")
def index_entertainment():
    return render_template("entertainment.html")

@app.route("/gettingaround")
def index_gettingaround():
    return render_template("gettingaround.html")



if __name__ == "__main__":
    app.run(host="0.0.0.0")

import re
from flask import Flask, jsonify, render_template, request, url_for
from flask_jsglue import JSGlue

from cs50 import SQL
from helpers import lookup

# configure application
app = Flask(__name__)
JSGlue(app)

# ensure responses aren't cached
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response

# configure CS50 Library to use SQLite database
db = SQL("sqlite:///mashup.db")

@app.route("/")
def index():
    return render_template("index.html")



# @app.route("/search")
# def search():
#     """Search for places that match query."""

#     '''find places that match the value of q in postal_code or place_name'''
#     q = request.args.get("q") + "%"

#     '''return JSON object of up to 10 places'''
#     places_list = db.execute("SELECT * FROM places WHERE postal_code LIKE :q OR place_name LIKE :q OR admin_name1 LIKE :q OR admin_code1 LIKE :q OR admin_code2 LIKE :q", q=q)
#     return jsonify(places_list[:10])


# @app.route("/update")
# def update():
#     return render_template("index.html")

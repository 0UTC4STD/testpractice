from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.debug = True

app.config['SECRET_KEY']="dankmeme"
toolbar = DebugToolbarExtension(app)

@app.route('/')
def ask_questions():

    prompts = story.prompts

    return render_template("index.html", prompts=prompts)    
    
@app.route("/search")
def search():
    """Handle GET requests like /search?term=fun"""

    term = request.args["term"]
    return f"<h1>Searching for {term}</h1>"

@app.route("/story")
def show_story():
    """Show story result."""

    text = story.generate(request.args)

    return render_template("story.html", text=text)

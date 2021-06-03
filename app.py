import os
from flask import Flask, render_template
from flask import jsonify
from flask import request
from flask_cors import CORS
from flask_pymongo import PyMongo
import pymongo



from pymongo import MongoClient
import json


app = Flask(__name__)
CORS(app)

app.config["DEBUG"] = True

app.config["MONGO_URI"] = os.environ['MONGO_URI']

mongo=PyMongo(app)
math=mongo.db.math
portuguese=mongo.db.portuguese

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/math")
def math():
    student_data = math.find({},{'_id':0}) 
    
    return jsonify(list(student_data)) 


@app.route("/portuguese")
def port():
    student_data = portuguese.find({},{'_id':0}) 
    
    return jsonify(list(student_data)) 


if __name__ == '__main__':
    app.run(debug=True)

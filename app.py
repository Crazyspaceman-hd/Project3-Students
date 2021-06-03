from flask import Flask, render_template
from flask import jsonify
from flask import request
import pymongo



from pymongo import MongoClient
import json


username = 'twig'
password = 'twiggles'

client = pymongo.MongoClient(f"mongodb+srv://{username}:{password}@pleiades.z7eyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.Students



app = Flask(__name__)

@app.route("/", methods=['GET'])
def main():
    return render_template('index.html')

@app.route("/math", methods=['GET'])
def math():
    student_data = db.math.find({},{'_id':0}) 
    
    return jsonify(list(student_data)) 


@app.route("/portuguese", methods=['GET'])
def port():
    student_data = db.portuguese.find({},{'_id':0}) 
    
    return jsonify(list(student_data)) 


if __name__ == '__main__':
    app.run(debug=True)

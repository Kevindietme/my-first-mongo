import { MongoClient } from "mongodb"; //getting funciton from library
import { mongoURI } from "./secrets.js"; //getting secret connection string

const connection = new MongoClient(mongoURI); //connecting to our cluster using secret connection string

await connection.connect(); //opening connection to our cluster

const db = connection.db('Cluster0'); //connecting to specific db

await db.collection('students').insertOne({ name: 'John Therlonge', age: 26 }) //add student 

const results = await db.collection('students').findOne({ name: 'John Therlonge' }); //get student

console.log(results);

connection.close(); //close connection 


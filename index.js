const express = require('express');
const app = express();
const port = process.env.port || 3000;

var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/ecom";
let db;

(async function () {
    try {
        const client = await MongoClient.connect(url);
        db = client.db('ecom');
        console.log('connected to databse');
    } catch (error) {
        throw error;
        console.log(`error occured while connecting to database : ${error}`);
    }
})();

app.get('/', async (req, res) => {

    // ***********delete a document 

    //  try {
    //     const result = await db.collection('product').deleteOne(
    //         {"_id": ObjectId("612297a9395ed228bcf092db")}
    //     );
    //     res.send(result);   
    //    } catch (error) {
    //     throw error;
    //         console.log(`error occured while fetching data from database: ${error}`);   
    //    }

  //update a document
    // try {
    //     const result = await db.collection('product').update(
    //         {"_id": ObjectId("612297a9395ed228bcf092db")},{$set :{"name":"Ac"}}
    //     );
    //     res.send(result);   
    //    } catch (error) {
    //     throw error;
    //         console.log(`error occured while fetching data from database: ${error}`);   
    //    }

    // "612297a9395ed228bcf092db"
    //find a single document by id 
    // try {
    //     const result = await db.collection('product').findOne(
    //         {
    //            _id : ObjectId( "612297a9395ed228bcf092db")
    //         }
    //     );
    //     res.send(result);   
    //    } catch (error) {
    //     throw error;
    //         console.log(`error occured while fetching data from database: ${error}`);   
    //    }

    // *************inset a docment 
    try {
        const result = await db.collection('product').insertOne(
            {
                name : 'Iphone',
                price : 120000
            }
        );
        res.send(result);   
       } catch (error) {
        throw error;
            console.log(`error occured while fetching data from database: ${error}`);   
       }
    
    // ***********find all data 
//    try {
//     const result = await db.collection('product').find().toArray();
//     res.send(result);   
//    } catch (error) {
//     throw error;
//         console.log(`error occured while fetching data from database: ${error}`);   
//    }
});

app.listen(port, () => {
    console.log(`server running on http://localhot${port}`);
})

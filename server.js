var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require('body-parser'),
    fs = require('fs');

var app = express();
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static(__dirname + '/'));

app.set('port', (process.env.PORT || 3000));


mongoose.connect("mongodb://simon:1234@ds041154.mongolab.com:41154/fantasmoland");
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(callback){
    console.log("MongoDB connection established");
});


var Schema = mongoose.Schema;
var messageSchema = new Schema({
    place: String,
    month: String,
    year: Number,
    dish: String,
    guests: String,
    missing: String,
    dessert: String
}, {collection: "fantasmoland"});
var MessageModel = mongoose.model("skeleton", messageSchema);


app.get("/menuer", function(req, res){
    MessageModel.find(function(err, data){
        if(err){
            console.error(err);
        }
        console.log(data);
        res.json(data);
    });
});


var menuer = require("./data/menuer.json");
console.log(menuer);



app.post('/addDish', function(req, res) {
    db.collection('fantasmoland').insertOne({
        "month": req.body.month,
        "year": req.body.year,
        "place": req.body.place,
        "dish": req.body.dish
    }, function(err, result){
        console.log("Inserted a document into the fantasmoland collection");
        res.send(200);
    });
});

app.post('/removeDish', function(req, res){
    var collection = db.collection("fantasmoland");
    MessageModel.remove({_id:req.body.id}, function(err, records){
        if(err){
            console.log("Error" + err);
            res.send(400);
        }
        else{
            console.log("dish Removed");
            res.send(200);
        }
    });
});


var server = app.listen(app.get('port'), function(){

	console.log("Listening on port " + app.get('port'));
});


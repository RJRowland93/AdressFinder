// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AdressSchema = new Schema({
  location: {
    type: String,
    required: true,
    date: {
  	type: Date,
  	default: Date.now()
	  } 
	},
  adress: {
    type: String
  },
});

// Create the Model
var Adress = mongoose.model("Click", ClickSchema);

// Export it for use elsewhere
module.exports = Adress;

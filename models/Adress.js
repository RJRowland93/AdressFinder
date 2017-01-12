// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AdressSchema = new Schema({
  location: {
    type: String
	},
  adress: {
    type: String
  },
});

// Create the Model
var Adress = mongoose.model("Adress", AdressSchema);

// Export it for use elsewhere
module.exports = Adress;

var bcrypt=require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;

var equipamentSchema = mongoose.Schema({
    descripcion:{type:String,required:true},
    defensa:{type:Number,required:true},
    categoria:{type:String,required:true},
    peso:{type:Number, required:true},
});

var Equipament = mongoose.model("equipamento",equipamentSchema);
module.exports = Equipament;
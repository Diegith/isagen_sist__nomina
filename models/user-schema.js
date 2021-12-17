import mongoose from ('mongoose');
const schema = mongoose.Schema;

const usersModel = new schema({
    names:{
        type: "string",
        unique: true,
        required:true
    },
    lastNames:{
        type: "string",
        unique: true,
        required:true
    },
    nPhone:{
        type: "number",
        unique: true,
        required:true
    },
    nIdentf:{
        type: "number",
        unique: true,
        required:true
    },
    email:{
        type: "email",
        unique: true,
        required:true
    },
    userName:{
        type: "string",
        unique: true,
        required:true
    },
    password:{
        type: "string",
        unique: true,
        required:true
    },
    dateAdmission:{
        type: "string",
        required:true
    },
    typeUser:{
        type: "string",
        unique: true,
        required:true
    },
    state:{
        type: "string",
        unique: true,
        required:true
    },
})

module.exports = mongoose.model("usuarios", usersModel);
import mongoose from ('mongoose');
const schema = mongoose.Schema;

const permisosModel = new schema({
    date:{
        type: "string",
        unique: true,
        required:true     
    },
    typePermission:{        
        type: "string",
        unique: true,
        required:true
    },
    state: {        
        type: "string",
        unique: true,
        required:true
    },    
})

module.exports = mongoose.model("permisos", permisosModel);
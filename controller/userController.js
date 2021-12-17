const getUser = (req, res) => {
    res.status(200).json("Hola desde la entrada");
}

const addUser = (req, res) => {
    console.log("hellow")
    res.send("codigo de entrada");
}

module.exports = addUser, getUser;
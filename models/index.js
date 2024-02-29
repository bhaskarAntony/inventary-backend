const mongoose = require("mongoose");
const uri = "mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };
const Mongoose = require("mongoose");
const employeesSchema = Mongoose.Schema({
    name       : { type: String },
    salary     : { type: Number },
    department : { type: String },
    attendance : { type: Number },
    status     : { type: String },
    age        : { type: Number },
})

const employeesDataModel = Mongoose.model("employees", employeesSchema);

module.exports = employeesDataModel;
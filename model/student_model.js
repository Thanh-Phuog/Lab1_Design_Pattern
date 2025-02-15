const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name: String,
    class: String,
    yearOfBirth: Number,
    address: String,
    phoneNumber: Number,
    email: String
}
);
module.exports = mongoose.model('Student', StudentSchema);

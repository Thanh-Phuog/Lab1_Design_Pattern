const mongoose = require('mongoose');

class MongoDB {
    constructor() {
        if (!MongoDB.instance) {
            MongoDB.instance = this;
            this.connect();
        }else{
            console.log('MongoDB instance already exists');
        }
        return MongoDB.instance;
    }
    
    async connect() {
       try {
            await mongoose.connect('mongodb://localhost:27017/student_singloten', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('MongoDB connected');
        } catch (error) {
            console.log('MongoDB connection error', error);
        }
    }
    }
const instance = new MongoDB();
// const instance2 = new MongoDB();
// console.log(instance === instance2); // true
Object.freeze(instance);
module.exports = instance;
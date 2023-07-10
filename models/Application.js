const mongoose = require('mongoose')

const appSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        highSchool:{type: String, required:true},
        age: {type: Number, required: true, min: 16},
        gpa:{type:Number, required:true, min:2.0},
        nationality:{type:String, required:true},
        resume:{type:Buffer},
        transcript:{type:Buffer },
    
    },
    {timestamps: true}
);

const ApplicationForm = mongoose.model('ApplicationForm', appSchema);

module.exports = ApplicationForm;
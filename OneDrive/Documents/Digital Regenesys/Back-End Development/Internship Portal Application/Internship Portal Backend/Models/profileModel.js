const mongoose = require("mongoose")

const profileSchema=mongoose.Schema({
    bio:{type:String, required:true, minlength:10, maxlength:100},
    skills:{},
    education:{},
    resumeLink:{},
    portfolioLink:{},
    experience:{}

})
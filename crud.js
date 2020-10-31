const mongoose = require("mongoose");
const nameModel = require('./models/budget_model');

let url = 'mongodb://localhost:27017/personal_budget';

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Connected to database");

    nameModel.find()
    .then((data)=>{
        console.log(data);
        mongoose.connection.close();
    })
    .catch((connectionError)=>
    console.log(connectionError)
    )
})
.catch((connectionError) => {
console.log(connectionError);

});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();
const port = 3000;
const nameModel = require('./models/budget_schema');
let url = 'mongodb://localhost:27017/personal_budget';

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));

app.use(cors());


app.get('/budget', (req, res)=>{  
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
        .then(()=>{
    nameModel.find({})
    .then((data)=>{
    res.json(data);
    mongoose.connection.close();
    })
    .catch((connectionError)=>{
    console.log(connectionError)
    });
})
.catch((connectionError) => {
console.log(connectionError);

});
});

app.post('/addBudget', (req, res)=> {

  mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
          .then(()=>{
              var newB={
                Title: req.body.Title,
                budget: req.body.budget,
                color: req.body.color
              };
              nameModel.insertMany(newB)
      .then(()=>{
          res.json(newB);
          mongoose.connection.close();
      })
      .catch((connectionError)=>{
        console.log(connectionError);
      });
  })
  .catch((connectionError) => {
    console.log(connectionError);

  });
  });
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});

 
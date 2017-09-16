const express = require('express'), 
      app = express(), 
      bodyParser = require("body-parser"), 
      crypto = require("crypto"); 


app.use(express.static('public'));


//
app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/views/index.html"); 
})


//route for form submission
app.post("/tiny", function(req, res){
  const suffix = req.query.url.split(":")[0]; //url property is available because
  //of object with url property passed by client side jQuery code.
  if (suffix === "https" || suffix === "http") {   
      const random = crypto.randomBytes(2).toString("hex"); 
      const tiny = `https://tinymeup.glitch.me/${random}`;
      const obj = {identifier: random, forward: req.query.url}
      arr.push(obj);
      res.send(tiny); //jQuery $.post callback gets this data as its argument
  } else{
    console.log("wrong input"); 
    res.send({status:"invalid", display:"Hey, that was an invalid url. Input url must start with https:// or http://"}); 
  }  
})


//route for saved tiny urls
app.get("/:id", (req, res) => {  
  const obj = arr.find((elm) => elm.identifier === req.params.id); 
  if (!obj){
    res.send("No such tiny url exists")
  } else{
    res.redirect(obj.forward); 
  }
})


const arr = []; //saves the url map


// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

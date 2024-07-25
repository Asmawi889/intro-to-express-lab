
//EXCRSISE 1
const express= require("express");

const application = express() 


application.get('/:Name', (req, res) => {

    res.send(`<h1> greetings ${req.params.Name} </h1>`);
});



application.listen( 3000 ,() => {

})


//EXCRSISE 2
application.get('/roll/:Numb', (req , res) => {

    

    const Roll= () => {
        return Math.floor(math.random() * req.params.Numb)
    } 

        if(isNaN(req.params.Numb)){
    
    res.send('you must specify number')
    }
    else{
        res.send(`<h1>You rolled a ${Roll}</h1>`)}
})

//exrcise 3 

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
    


app.get('/hello', (req, res) => {

    if (collectibles.name)
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});

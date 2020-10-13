//this is our web server through express module
const path = require('path')    //node module to add which help to add a index.html
const express = require('express')
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')
const app =express()
const port = process.env.PORT || 8080

console.log(__dirname) //to show path of this dir.
const add = path.join(__dirname,'../public')   //to join dirname to public


app.set('view engine','hbs')
app.use(express.static(add))  //it will add out index file and display it
//its a static page for dynamic page we can use hbs (handlebars module)
app.get('',(req, res) => {
    res.render('index' , {
        title: 'weather',
        name: 'prateek'
    })                          //it will show index.hbs page and we can pass object in .hbs as it is dynamic
})

app.get('/about',(req, res) => {
    res.render('about', {
        title: 'ABOUT US',
        name: 'prateek kawthekar'
    })
})

app.get('/help',(req, res) => {
    res.render('help' , {
        message:"where u are stuck we will try to help u!!"
    })
})

//to understand query string lets take an example 
app.get('/products' , (req,res) =>{
    if(!req.query.search){
         return res.send({
             error:"sorry plz enter query"
         })
    }else{
        console.log(req.query.search)
        res.send({
            products:[]
        })
    }
})



app.get('/weather',(req,res) =>{
      if(!req.query.address){
          return res.send({
              error:"plz provide address"
          })
      }
          const pub = req.query.address
          geocode(pub, (error,{longitude,latitude,name,country} = {}) =>{  //empty array if address=! is there in url then our web will crash so to remove that     
            if(error){
                return res.send({error})
            }                          //to connect the both io we study a concept of callback chaining here we can use the input of 1 io i.e geocode and use it in foreast
       
       
       forecast(latitude,longitude, (error,potty) => {
          if(error){
              return console.log(error)
          }
         
       

        res.send({
            location: country,             //same we can modify our weather app by query string
            forecast: potty,
            address: pub
        })
    })

    })
      
})                                                  //and we can also send parsed json as response **express automatically parsed our object into json


app.listen(port, () =>{
    console.log("server is running!!" +port)  //this is to start the server on port 3000
})


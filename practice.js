//in web server we have different kind of url like app.com its a domain and 
//app.com/help = its a sub page or routes
//app.com/about

//  app.get('', (req,res) => {          // app.get is used for getting to web browser or input it has 2 arg i.e domain and function having response and req
//      res.send("hello this is my first web page through express!!") // it will be displayed on browser
//  }) //as it is static we can remove this and add a html static file instead

// app.get('/help',(req,res) =>{
//     res.send("this is help page!!!")    //it will also display but with app.com/help
// })

// app.get('/about',(req,res) =>{                  //we can pass html as response also like in /about
//     res.send('<h1>its a HTML response!!!</h1>')
// })

//using ES6 default parameter function if user dont pass the value to the arg

const map = (name = 'user') => {   //default value
    console.log("hello  " + name)
}
//map('prateek')
map()  //here we can see output hello undefined instead of that if we provide a default value then
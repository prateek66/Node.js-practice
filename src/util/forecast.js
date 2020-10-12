const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=fd555b3e37d8c3bf81fb27ad15c781e6&query='+ latitude + ',' + longitude

    request({url:url, json:true},(error,response) =>{          
        //for parsing the infotmation as it the output before was unparsed
        if(error){
            callback("enable to connect to server",undefined) // if any error occures this will take care else our normal response is there
       
       
        }else if(response.body.error){
            callback("location is not availabe",undefined) //for error if input from user is wrong
        }else{
            callback(undefined,'current temp. is '  + response.body.current.temperature + ' and percip can be  '    +   response.body.current.precip + ' and its like '  +  response.body.current.feelslike)
       
                   // we have used the response argument so far now we will see error arg
        }
       
       })

}

module.exports = forecast
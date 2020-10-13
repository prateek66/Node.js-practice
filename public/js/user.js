console.log("this is client side javascript")
//this is client side javascript so to fetch the data from url and store it we can use fetch()/api in this file
//now to fetch data from the form we created 

const weather = document.querySelector('form')
const user = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

//messageone.textContent="from javascript"  //this will allow u to write in <p> tag in index.hbs from js
weather.addEventListener('submit', (e) =>{
    e.preventDefault()   //to store for more than 10 sec or it will get flashed or removed from the searched bar

    const location = user.value    //for geting value at search bar
    messageone.textContent = 'loading....'
    messagetwo.textContent = ''
    fetch('/weather?address='+ location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
           return messageone.textContent = data.error
        }
        messageone.textContent=data.location
        messagetwo.textContent=data.forecast

    })
})
})
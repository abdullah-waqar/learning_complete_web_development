const promises = fetch("http://api.weatherapi.com/v1/current.json?key=4369989328eb4f588fc152051261306&q=pakistan&aqi=yes")



// promises.then( (response) => response.json())
// .then( (data) => console.log(data) )
// .catch( (error) => console.log(error) )

// promises.then( (response) => { 
//     const data = response.json();
//     data.then( (result) => {console.log(result)} )
// })
// .catch( error => console.log("Some error occured") )


const promise = new Promise( function (resolve , reject) {

    const timePassed = true
    if(!timePassed)
    {

    
    setTimeout(() => {
        console.log("She will be my GF")
    }, 2000);
    }
    else {
        reject("You are late buddy")
    }
} )

promise.then( response => console.log(response) )
.catch( error  => console.error(error))  










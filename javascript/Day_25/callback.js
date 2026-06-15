//* Callback -> when function is passed as the arguement, is called Callback function.




// callback function

function fetchUser(callback)
{
    console.log("Fetching user detail.........");

    setTimeout( () => {
        console.log("Data fetched successfully");
        callback()
    }, 2000 )
}

function greet()
{
    console.log("Hello Everyone");
}

fetchUser(greet)

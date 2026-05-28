

// const timeElement = document.getElementById("time");

// function updateClock() {
//     const now = new Date();
    
//     // Automatically formats to "hh:mm:ss AM/PM" with correct leading zeros
//     timeElement.textContent = now.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//     });
// }

// // 1. Run immediately so the clock isn't blank on page load
// updateClock(); 

// // 2. Update every second
// setInterval(updateClock, 1000);



// NodeList.prototype.myForEach = function(callback)
// {
//     for(let i = 0; i < this.length; i++)
//     {
//         callback(this[i] , i , this)
//     }
// }


// const obj = document.querySelectorAll('.heading1')

// obj.myForEach( (val , key) => val.style.color = "Pink" )


// * Selecting elements with the help of relationships

const selecting = document.querySelector(".heading1")

console.log(selecting.parentElement)
console.log(selecting.parentNode)

console.log(selecting.childNodes[0].data)
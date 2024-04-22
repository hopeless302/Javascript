// The fetch() function, json() method, and async functions all return a Promise by default.
// fetch() returns a promise that resolves to the Response to that request, whether it is successful or not.
let url = "https://catfact.ninja/fact"

fetch(url)  // fetch returns a promise 
.then((reolve) => {
    console.log(reolve);
    return reolve.json()// reolve.json() returns a promise
})
.then((data) => {  
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

                            //  ---------------
const apii = "https://catfact.ninja/fact";
async function fetchData(){
    try{
        let response = await axios.get(apii);
        console.log(response);
    }
   catch(error){
       console.log("error", error);
   }
}

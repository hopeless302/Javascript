let btn = document.querySelector("button");

btn.addEventListener("click", async (e) => {
    let data = await fetchData();
    let p = document.querySelector("#result");
    p.innerHTML = data;
});

const apii = "https://catfact.ninja/fact";
async function fetchData(){
    try{
        let response = await axios.get(apii);
        return response.data.fact;
    }
   catch(error){
       console.log("error", error);
       return "No Data Available";
   }
}

//To convert a string in JSON format into a JavaScript object, we use JSON.parse().

let jsonString = '{"key": "value"}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { key: 'value' }

//To convert a JavaScript object into a string in JSON format, we use JSON.stringify().

let jsonObject2 = { key: 'value' };
let jsonString2 = JSON.stringify(jsonObject2);
console.log(jsonString2); // {"key":"value"}

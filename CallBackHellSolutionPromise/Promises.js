// function saveToDB(data) {
//     let internetSpeed = Math.floor(Math.random() * 10 + 1)
//     console.log(internetSpeed);
//     if (internetSpeed > 5) {
//         console.log("You Data is saved in DB", data);
//     } else if (internetSpeed <= 5) {
//         console.log("Your internet is slow");
//     }
// }

// saveToDB("My Data");

//using callback function

// THIS IS ALSO CALLED AS CALLBACK HELL 
function saveToDbUsingCallBack(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10 + 1)
    console.log(internetSpeed);
    if (internetSpeed > 5) {
        success(data);
    } else if (internetSpeed <= 5) {
        failure();
    }
}

saveToDbUsingCallBack("My Data", (data) => {
        console.log("Your data is saved in DB", data),
        saveToDbUsingCallBack("2nd data Saved", () => console.log("Your 2nd data is saved in DB", data),
                () => console.log("Your 2nd data is not saved in DB", data)
            )
    },
    () => {
        console.log("Your internet is slow");
    }
);
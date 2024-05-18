//I am going to make a stopWatch using constructor funtions

function StopWatch(){
    let duration, startTime, endTime, running = 0;

    this.start = () =>{
        if(running){
            console.log("Stopwatch has already started");
        }else{
            running = true;
            startTime = new Date();
        }
    }
    this.stop = () => {
        if(!running){
            console.log("stopwatch is already stop");
        }else{
            running = false;
            endTime = new Date();
            const seconds = (startTime.getTime()- endTime.getTime())/1000;
            duration += seconds;
        }
    }
    this.reset = () => {
        if(!running){
            console.log("You watch is running");
        }else{
            running = null;
            startTime = null;
            endTime = false;
            duration = 0;
        }
    }
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
      });
}

// GPT

// function StopWatch() {
//     let duration = 0, startTime = null, endTime = null, running = false;

//     this.start = () => {
//         if (running) {
//             console.log("Stopwatch has already started");
//             return;
//         }
//         running = true;
//         startTime = new Date();
//     };

//     this.stop = () => {
//         if (!running) {
//             console.log("Stopwatch is already stopped");
//             return;
//         }
//         running = false;
//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//         startTime = null; // Reset startTime to null after stopping
//     };

//     this.reset = () => {
//         running = false;
//         startTime = null;
//         endTime = null;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function () { return duration; }
//     });
// }

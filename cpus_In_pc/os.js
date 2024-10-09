const os = require('os');

console.log('OS CPU architecture:', os.arch());

console.log("Total cpus:", os.cpus().length);

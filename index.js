const express = require('express');
const fs = require('fs');
const zlib = require('zlib');


const port = process.env.PORT || 3000;
const app = express();


// I would like to create zip of the files 
// here We go
fs.createReadStream("./example1.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./example1.zip")))


app.get('/', (req, res) =>{
    const Xstream = fs.createReadStream("./example.txt", 'utf-8')
    console.log("creating a Stream to Share Data in CHuncks");

    // after here you can handle error to open file u can reference the code from the bottom of the same page..


    Xstream.on("data", (chunk) => {
        console.log("on Chunks");
        res.write(chunk)
    });

    Xstream.on("end", () =>{
        res.end()
        console.log("response is closing");
    })

})

// Start the server
app.listen(port, () => {
    console.log(`Server is running @ ${port}`);
});


// const express = require('express');
// const fs = require('fs');

// const port = process.env.PORT || 3000;
// const app = express();

// app.get('/', (req, res) => {
//     const Xstream = fs.createReadStream("./example.txt", 'utf-8');
//     Xstream.on("data", (chunk) => {
//         res.write(chunk);
//     });
//     Xstream.on("end", () => {
//         res.end();
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running @ ${port}`);
// });


// const express = require('express');
// const fs = require('fs');

// const port = process.env.PORT || 3000;
// const app = express();

// app.get('/', (req, res) => {
//     const Xstream = fs.createReadStream("./example.txt", 'utf-8');
    
//     // Handle errors when opening the file
//     Xstream.on("error", (err) => {
//         res.status(500).send("Internal Server Error");
//         console.error("Error reading file:", err);
//     });

//     // Stream data from file to response
//     Xstream.on("data", (chunk) => {
//         res.write(chunk);
//     });

//     // Close the response when stream ends
//     Xstream.on("end", () => {
//         res.end();
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running @ ${port}`);
// });


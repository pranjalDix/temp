const express = require('express')

const format= require('date-format')
// for above we have to include a third-party package (find it on npm website)

const app = express()

const PORT= 4000 || process.env.PORT

// req= request, res= response
// "/" is used for giving the local path
// we have to provide these two always
app.get("/", (req,res) => {
    res.status(201).send("<h1>hello from get of index file</h1>")
    // tells the status of the program
})

// v1= version1
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial= {
        username: "parryD",
        followers: 350,
        following: 450,
        date: format("dd/MM hh:mm:ss", new Date())
    };

    // res.status(200).json({instaSocial});
    res.status(200).json(instaSocial);
})

app.get("/api/v1/facebook", (req, res) => {
    const fbSocial= {
        username: "parryDix",
        followers: 35,
        following: 45,
        date: format(format.DATETIME_FORMAT, new Date())
    };

    res.status(200).json(fbSocial);
})

app.get("/api/v1/linkedIn", (req, res) => {
    const liSocial= {
        username: "parry",
        followers: 3500,
        following: 4500,
        date: format(format.DATETIME_FORMAT, new Date())
    };

    res.status(200).json(liSocial);
})

// : is important; It broke the api call for instagram, that's we put it after our instagram, facebook and linkedIn.
app.get("/api/v1/:token", (req,res) => {
    console.log(req.params.token);
    res.status(200).send({param: req.params.token})
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} `)
}) 
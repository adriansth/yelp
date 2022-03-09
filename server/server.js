const express = require('express');
require("dotenv").config();
const app = express();

// get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
    res.status(200).json(
        {
            status: "success",
            data: {
                restaurant: ["mcdonalds", "wendys"]
            }
        }
    );
});

//get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

//create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
});

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});



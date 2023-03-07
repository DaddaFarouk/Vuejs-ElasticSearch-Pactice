const express = require("express");
const bodyParser = require("body-parser");
const elasticClient = require("./elastic-client");
const cors = require('cors');

require("express-async-errors");

const app = express();

app.set('port', process.env.PORT || 5000 );
app.use(cors());
app.use(bodyParser.json());

// Express routes

app.listen(app.get('port'), function() {
    console.log('Your node.js server is running on PORT: ',app.get('port'));
});

app.get("/", (req, res) => {
    res.redirect("http://localhost:8080/");
  });
  
app.post("/create-product", async (req, res) => {
    const result = await elasticClient.index({
        index: "vue-elastic-products",
        document: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        brand: req.body.brand,
        category: req.body.category,
        image: req.body.image,
        dateAjout: req.body.dateAjout
        },
    });

    res.send(result);
});

app.delete("/remove-product", async (req, res) => {
    const result = await elasticClient.delete({
        index: "vue-elastic-products",
        id: req.query.id,
    });

    res.json(result);
});

app.get("/search", async (req, res) => {
    const result = await elasticClient.search({
        index: "vue-elastic-products",
        query: { 
            fuzzy: req.query,     
        },
    });

    res.json(result);
});

app.get("/products", async (req, res) => {
    const result = await elasticClient.search({
        index: "vue-elastic-products",
        query: { match_all: {} },
    });

    res.send(result.hits.hits);
});
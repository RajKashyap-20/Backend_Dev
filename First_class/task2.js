// server.js (Express server for Product Search & Discount API)

const express = require('express');
const url = require('url');
const fs = require('fs');
const app = express();
const PORT = 8000;

app.get('/product', (req, res) => {
    const queryObject = url.payrse(req.url, true).quer;
    const { name, price, discount } = queryObject;

    const finalPrice = price - (price * (discount / 100));

    const logEntry = `Product: ${name}, Price: ${price}, Discount: ${discount}%, Final Price: ${finalPrice}\n`;
    fs.appendFile('searches.txt', logEntry, (err) => {
        if (err) throw err;
    });

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Product Details</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .result { background: #f9f9f9; padding: 15px; border: 1px solid #ddd; }
            </style>
        </head>
        <body>
            <div class="result">
                <h2>Product Information</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Original Price:</strong> ₹${price}</p>
                <p><strong>Discount:</strong> ${discount}%</p>
                <p><strong>Final Price:</strong> ₹${finalPrice}</p>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
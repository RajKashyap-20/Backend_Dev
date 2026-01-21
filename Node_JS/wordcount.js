const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const words = data.trim().split(/\s+/);
    const wordCount = words.length;

    const result = `Number of words: ${wordCount}`;

    fs.writeFile('output.txt', result, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Word count written to output.txt');
    });
});

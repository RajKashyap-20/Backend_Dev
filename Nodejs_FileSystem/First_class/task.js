const fs = require('fs');

function logActivity(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `${message} - ${timestamp}\n`;
    fs.appendFile('activity.log', logEntry, (err) => {
        if (err) throw err;
    });
}

module.exports = logActivity;

Server.listen(3000,()=>{
    console.log("server id running on port 3000")
})


const os = require('os');
const fs = require('fs');

function logSystemInfo() {
    const cpuInfo = os.cpus().length;
    const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);
    const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);
    const platform = os.platform();
    const timestamp = new Date().toLocaleString();

    const logData = `
Time: ${timestamp}
Platform: ${platform}
CPU Cores: ${cpuInfo}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
-----------------------------
`;

    fs.appendFile('system_info.log', logData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
    });
}

setInterval(logSystemInfo, 5000);

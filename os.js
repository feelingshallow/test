const os = require('os')

const address = require('address')

const networkInterfaces = os.networkInterfaces();

let ip = '';
for (const key in networkInterfaces) {
    if (Object.prototype.hasOwnProperty.call(networkInterfaces, key)) {
        networkInterfaces[key]?.forEach(item => {
            if (!item.internal && item.family === 'IPv4' && item.address.startsWith('192.168')) {
                ip = item.address;
            }
        });
    }
}
console.log(ip)

console.log(address.ip())
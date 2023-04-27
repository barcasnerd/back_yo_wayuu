const fs = require('fs');
const os = require('os');
const path = require('path');

export default function RemoveTempFiles() {
    const directory = `${__dirname}/../../temp/`;

    fs.readdir(directory, (err: any, files: any) => {
        if (err) throw err;

        for (const file of files) {
            const time = parseInt((file.split('_'))[1]);
            if ((new Date()).getTime() - time > 300000) {
                fs.unlink(path.join(directory, file), (err: any) => {
                    if (err) throw err;
                });
            }
        }
    });
}
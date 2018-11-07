const PathFile = 'customer-data.csv';
const csv = require('csvtojson');
const fs = require('fs-extra');


csv().fromFile(PathFile).then((jsonObj) => {
    //async
    fs.outputJson('customer-data.json', jsonObj)     
    //sync
    fs.outputJsonSync('customer-data.json', jsonObj) 
    console.log(jsonObj);
})



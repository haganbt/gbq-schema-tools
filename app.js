var bigquery = require('google-bigquery');
var fs = require('fs');
    
    var client = bigquery({
        "iss": '554267902492@developer.gserviceaccount.com',
        "key": fs.readFileSync('file.pem', 'utf8')
    });


    client.getProjects(function (err, projs) {
        console.log(projs);
        console.log(projs.projects); //list of projects.
    });
/*
    client.tables.create({... your table resource ...}, function (err, table){
        console.log(table);
        console.log(table.tableReference.tableId); //table's id.
    });
    
*/
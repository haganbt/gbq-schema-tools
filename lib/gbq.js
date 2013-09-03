'use strict';
	var config = require('../config')()
		, bigquery = require('google-bigquery')
		, fs = require('fs')
		;

		var client = bigquery({
      "iss": config.bigquery.iss,
      "key": fs.readFileSync('file.pem', 'utf8')
  	});
		
module.exports = {

  getTest : function() { 	

		client.getProjects(function (err, projs) {
			var projId = projs.projects[0].id;
		   
			client.datasets.getAll(projId, function (err, datasets) {
				for (var datasetId in datasets.datasets) {
					var datasetId = datasets.datasets[datasetId].datasetReference.datasetId;
					client.tables.getAll(datasetId, projId, function (err, tables) {
						console.log("\n\n" + JSON.stringify(tables) + "\n\n");
        	});	
				}    
   		});
		});
  },
    
};

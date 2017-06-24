var fs       = require('fs');
var favicons = require('favicons');

var source = __dirname + '/app/images/logo.svg';

var config = {
	appName: 'Robin West',
	background: '#fff',
	theme_color: '#fff',
	path: 'favicons/',
	display: 'browser',
	logging: true
};

var outputDir = __dirname + '/app/favicons/';

favicons(source, config, function(error, response){
	if (error) {
		console.log(error.status);  // HTTP error code (e.g. `200`) or `null`
		console.log(error.name);    // Error name e.g. "API Error"
		console.log(error.message); // Error description e.g. "An unknown error has occurred"
		return;
	}

	// Check we got a folder first
	if(!fs.existsSync(outputDir))
		fs.mkdirSync(outputDir);

	// Build images
	for(var i = 0; i < response.images.length; i++){
		var image = response.images[i];

		fs.writeFile(outputDir + image.name, image.contents, function(err){
			if(err){
				console.log('\x1b[41m', 'error', '\x1b[0m' + image.name);
				console.log(err);
				console.log('-----');
			} else {
				console.log('\x1b[42m', 'success', '\x1b[0m' + image.name);
			}
		});
	}

	// Build files (manifest.json etc.)
	for(var i = 0; i < response.files.length; i++){
		var file = response.files[i];

		fs.writeFile(outputDir + file.name, file.contents, function(err){
			if(err){
				console.log('\x1b[41m', 'error', '\x1b[0m' + file.name);
				console.log(err);
				console.log('-----');
			} else {
				console.log('\x1b[42m', 'success', '\x1b[0m' + file.name);
			}
		});
	}

	// Build a file with the html links
	// TODO it would be nice if this could be written to the head of index.html
	var _linksContent = '';
	for(var i = 0; i < response.html.length; i++){
		var html = response.html[i];

		_linksContent += html + '\n';
	}
	fs.writeFile(outputDir + '_links.html', _linksContent, function(err){
		if(err){
			console.log('\x1b[41m', 'error', '\x1b[0m' + '_links.html');
			console.log(err);
			console.log('-----');
		} else {
			console.log('\x1b[42m', 'success', '\x1b[0m' + '_links.html');
		}
	});
});

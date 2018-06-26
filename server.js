const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.get('/anyjson', (req, res) => {
	res.send({
		favoriteSport: 'Hockey',
		bestCars: [
			'Volvo V70', 
			'Volvo 240 DL'
		]
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: "Problem?"
	});
})

app.listen(3000);
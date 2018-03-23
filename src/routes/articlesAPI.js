const article = require(__dirname + '/../libs/articles.js');

module.exports = (app, db) => {
	app.post('/new', (req, res) => {
		article.post({name: 'jcai'}, data, db, err => {
			
		})
	});
}

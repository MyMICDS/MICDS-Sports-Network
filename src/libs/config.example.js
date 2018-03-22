module.exports =
{
	port: 1420,
	hostedOn: 'http://localhost:1420', // URL to access this server. Used for signing JWT's
	production: false, // Whether or not the server is running in production mode. (This enables/disables a few features!)

	mongodb: {
		uri: ''
	},
}

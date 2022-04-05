const { Schema } = require("mongoose");

function userModal(app) {
	
	return app.mongoose.model('User', new Schema({
		name: { type: String },
	}, { collection: 'user' }))
}

module.exports = userModal;

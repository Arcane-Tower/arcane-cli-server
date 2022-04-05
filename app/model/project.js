const { Schema } = require("mongoose");

function projectModal(app) {
	
	return app.mongoose.model('Project', new Schema({
		name: { type: String },
	}, { collection: 'project' }))
}

module.exports = projectModal;

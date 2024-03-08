const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electricianSchema = new Schema({
    name: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    phoneNumber: { type: String, unique: true },
    address: {
        type: String
    }
})

const Electrician = mongoose.model('Electrician', electricianSchema);



const siteSchema = new Schema({
    siteId: {
        type: "string",
        required: true,
    },
    date: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    assigned_electrician_id: { type: Schema.Types.ObjectId, ref: 'Electrician' },
});


const Site = mongoose.model('Site', siteSchema);

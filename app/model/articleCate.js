module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleCateSchema = new Schema({
        title: { type: String },
        fid: { type: String },
        desc: { type: String },
        status: {
            type: Number,
            default: 1
        }
    });
    return mongoose.model('ArticleCate', ArticleCateSchema, 'articleCate');
}
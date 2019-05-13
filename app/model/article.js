module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ArticleSchema = Schema({
        title: { type: String },
        cid: { 
            type: Schema.Types.ObjectId
        },
        uid: { 
            type: Schema.Types.ObjectId 
        },
        content: { type: String },
        status: {
            type: Number,
            default: 1
        }
    });
    return mongoose.model('Article', ArticleSchema, 'article');
}
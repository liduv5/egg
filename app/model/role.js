module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const d = new Date();

    const RoleSchema = Schema({
        title: { type: String, unique: true },
        description: { type: String },
        add_time: {
            type: Number,
            default: d.getTime()
        }
    });
    return mongoose.model('Role', RoleSchema, 'role');
}
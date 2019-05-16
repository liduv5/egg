module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;


    const roleAccessSchema = Schema({
        role_id: { type: Schema.Types.ObjectId },
        access_id: { type: Schema.Types.ObjectId },
    });
    return mongoose.model('roleAccess', roleAccessSchema, 'roleAccess');
}
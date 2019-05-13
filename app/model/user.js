'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    /* _id: {
      type: Schema.Types.ObjectId,
    }, */
    username: {
      type: String,
      unique: true
    },
    realname: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    QQ: {
      type: Number,
    },
    role_id: {
      type: Schema.Types.ObjectId,
    }
  });
  return mongoose.model('User', UserSchema, 'user');
};

import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/meetupReactNative', {useNewUrlParser: true});
    mongoose.connection
        .once('open', () => console.log("mongoDB running successfully"))
        .on('error', err => console.log(err))
};
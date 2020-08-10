const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
});

mongoose.connection.once('open', () => {
    console.log('Connection to the database has been established');
}).on('error', (error) => {
    console.log(`Connection Error ${error}`);
})
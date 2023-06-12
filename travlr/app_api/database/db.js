const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

// avoid 'current Server Discover and Monitoring engine is deprectated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
    console.log('connected');
});

mongoose.connection.on('error', err => {
    console.log('error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
});

if (process.platform === 'win32') { 
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout

    });
    rl.on('SIGINT', () => {
        process.emite("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() =>{
        conseol.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(prcoess.pid, 'SIGUR2');
    });
});

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        prcoess.exit(0);
    });
});

// For heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        prcoess.exit(0);
    });
});

connect();

// bring in the Mongoose schema
require('./models/travelr');
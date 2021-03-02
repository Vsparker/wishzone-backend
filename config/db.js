import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='porkchop';
        const con = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/wishzone', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;

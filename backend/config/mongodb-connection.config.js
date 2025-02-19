// Import required modules
import mongoose from "mongoose";



/**
 * Establishes a connection to the MongoDB database
 * @async
 * @function connectDB
 * @throws {Error} If connection fails
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log('MongoDB connected');
  } catch (error) {
    // Rethrow the error for handling by the caller
    throw error;
  }
};

// Export the connectDB function as the default export
export default connectDB;

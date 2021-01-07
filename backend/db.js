import mongoose from 'mongoose'
const ConnectDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connection succeeded.')
    // mongoose.set('useFindAndModify', false)
  } catch (err) {
    console.log(
      'error in MongoDB connection:' + JSON.stringify(err, undefined, 2)
    )
    process.exit(1)
  }
}

export default ConnectDB

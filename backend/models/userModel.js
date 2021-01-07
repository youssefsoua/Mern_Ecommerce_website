import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isadmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    inscription_date: {
      type: Date,
      default: Date.now,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    gender: {
      type: String,
    },
    birth_date: {
      type: Date,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    country: {
      type: String,
    },
    address: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)
export default User

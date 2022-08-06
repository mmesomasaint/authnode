import mongoose from 'mongoose'
import validator from 'validator'
import { compareSync, hashSync } from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter a name.'],
      validate: {
        validator: function (name) {
          return validator.isAlphanumeric(name, 'en-US', { ignore: 's' })
        },
        message: 'Names may only have letters and numbers',
      },
    },
    email: {
      type: String,
      required: [true, 'Enter an email address.'],
      unique: [true, 'Email already taken.'],
      validate: [validator.isEmail, 'Enter a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Enter a password.'],
      minLength: [8, 'Password should be at least 8 characters long.'],
    },
    repeat_password: {
      type: String,
      required: [true, 'Retype your password.'],
      validate: {
        validator: function (repeat_password) {
          return repeat_password === this.password
        },
        message: "Passwords don't match.",
      },
    },
  },
  { timestamps: true }
)

userSchema.pre('save', function () {
  if (this.isModified('password')) {
    this.password = hashSync(this.password, 12)
    this.repeat_password = undefined
  }
})

userSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

export default User

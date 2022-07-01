const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
},
    {
        timestamps: true
    }
)

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;

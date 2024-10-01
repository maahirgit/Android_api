const userSchema = require('../model/UserModel')
const encrypt = require('../util/Encrypt')
const otpModel = require('../model/AuthModel')
const mailUtil = require('../util/MailUtil')
const Otp = Math.floor(Math.random()*10000)
console.log("Otp",Otp)

const registerUser = async(req,res) => {
    const hashedPassword = await encrypt.encryptPassword(req.body.password)
    const user = Object.assign(req.body,{password : hashedPassword})

    console.log("User",user)
    const savedUser = await userSchema.create(user)
    const otpObject = {
        otp : Otp,
        email : savedUser.email,
        time : new Date()
    }
    await otpModel.create(otpObject);
    await mailUtil.sendingMail(savedUser.email,"Welcome",`Your Otp is ${Otp}`)

    res.status(201).json({
        message : 'User registered successfully',
        data : savedUser
    })
}

const loginUser = async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const employeeByEmail = await userSchema.findOne({email : email})

    if(employeeByEmail){
        const isMatch = await encrypt.comparePassword(password,employeeByEmail.password)
        res.status(200).json({
            message : "Login Successfull"
        })
    }
    else{
        res.status(404).json({
            message : "Invalid credentials"
        })
    }
}

const forgotPassword = async(req,res) => {
    const emailnew = req.body.email
    const emaildata = await userSchema.findOne({email : emailnew})
    if(emaildata){
        await mailUtil.sendingMail(emailnew,"Forgot Password",`<p>Your otp is ${Otp}</p>`)
        const otpObject = {
            otp : Otp,
            email : emailnew,
            time : new Date()
        }
        await otpModel.create(otpObject)
        res.status(201).json({
            message : "Mail sent successfully"
        })
    }
    else{
        res.status(404).json({
            message : "User not found"
        })
    }
}

const resetPassword = async(req,res) => {
    const otpnew = req.body.otp;
    const emailnew = req.body.email;
    const newpassword = req.body.password;
    const hashed = await encrypt.encryptPassword(newpassword)
    const otpData = await otpModel.findOne({otp : otpnew,email : emailnew})
    if(otpData){
        const updateuser = await userSchema.findOneAndUpdate({email : emailnew},{password : hashed})
        res.status(201).json({
            message : "Password reset successful"
        })
    }
    else{
        res.status(500).json({
            message : "Password reset unsuccessful"
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword
}
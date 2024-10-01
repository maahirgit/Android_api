const nodemailer = require("nodemailer")

const sendingMail = async(to,mailsubject,mailtext) => {
    const mailOptions = {
        from : "programmers752@gmail.com",
        to : to,
        subject : mailsubject,
        html : `<h1> ${mailtext}</h1>`
        
    }

    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : "programmers752@gmail.com",
            pass : "nexhtmiodniykvai"
        }
    });

    const res = await transporter.sendMail(mailOptions);
    console.log("res",res)
}

module.exports = {
    sendingMail
}
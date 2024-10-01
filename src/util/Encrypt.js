const bcrypt = require('bcrypt')

const encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    //console.log("hashed password",hashedPassword)

    return hashedPassword;
};

const comparePassword = async(password,hashedPassword) => {
    const isMatch = await bcrypt.compare(password,hashedPassword)
    //console.log("isMatch",isMatch);
    return isMatch;
}

module.exports = {encryptPassword,comparePassword}
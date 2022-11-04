function passwordGenerate(num) {

    let password = "";
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < num; i++) {
        password += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return password;
}

module.exports = passwordGenerate;
exports.nameRegex = (name) => {
    const nameRegex = /^[a-zA-Z ]{3,30}$/;
    return nameRegex.test(name);
}

exports.emailRegex = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);

}
exports.passwordRegex = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
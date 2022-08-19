export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password)

    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) =>{
    return validateMail(mail) && validateUsername(username) && validatePassword(password);
}
const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 20;
}
const validateUsername = (username) => {
    return username.length >= 6 && username.length <= 20;
}

export const validateMail = (mail) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(mail);
}
function age(){
    const date = new Date();
    const currentYear = date.getFullYear();
    const yearOfBirth = 2000;
    const Age = (currentYear - yearOfBirth);
    document.getElementById('age').innerHTML = `${Age} years`;
}
document.getElementById('age').addEventListener('load',age());
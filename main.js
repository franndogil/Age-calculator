function calculate(){
    let dateBirth = document.getElementById('dateBirth').value;

    let birthDate = new Date(dateBirth)
    let currentDate = new Date()

    let currentDateYear = currentDate.getFullYear()
    let currentDateMonth = currentDate.getMonth() + 1
    let currentDateDay = currentDate.getDate()

    let birthDateYear = birthDate.getFullYear()
    let birthDateMonth = birthDate.getMonth() + 1
    let birthDateDay = birthDate.getDate()

    let age = currentDateYear - birthDateYear
    const monthDifference = currentDateMonth - birthDateMonth

    if (monthDifference < 0 || (monthDifference === 0 && currentDateDay <= birthDateDay)) {
        age--
    }
    output.value = "You are "  + age + " years old."
}
function calculate(){
    let dateBirth = document.getElementById('dateBirth').value;

    let birthDate = new Date(dateBirth)
    let currentDate = new Date()

    let currentDateYear = currentDate.getFullYear()
    let currentDateMonth = currentDate.getMonth() + 1
    let currentDateDay = currentDate.getDate()

    let birthDateYear = birthDate.getFullYear()
    let birthDateMonth = birthDate.getMonth() + 1
    let birthDateDay = birthDate.getDate() + 1

    let age = currentDateYear - birthDateYear

    if(currentDateYear < birthDateYear){
        if(currentDateMonth < birthDateMonth){
            if(currentDateDay <= birthDateDay){
                age = currentDateYear - birthDateYear
            }
            else
                age = currentDateYear - birthDateYear - 1
        }
        else
            age = currentDateYear - birthDateYear - 1
    }

    output.value = "You are " + age + " years old."
}
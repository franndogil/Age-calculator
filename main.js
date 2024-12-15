function calculate(){
    const dateBirth = document.getElementById('dateBirth').value;

    const birthDate = new Date(dateBirth)
    const currentDate = new Date()

    let age = currentDate.getFullYear() - birthDate.getFullYear()

    if(currentDate.getMonth()<birthDate.getMonth()){
        age--
    }
    else{
        if(currentDate.getDay() <= birthDate.getDay()){
            age--
        }
    }

    output.value = "You are " + age + " years old."
}
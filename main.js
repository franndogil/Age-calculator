function calculate(){
    const dateBirth = document.getElementById('dateBirth').value;

    const birthDate = new Date(dateBirth)
    const currentDate = new Date()

    const currentDateYear = currentDate.getFullYear();
    const currentDateMonth = currentDate.getMonth() + 1;
    const currentDateDay = currentDate.getDate();

    let age = currentDateYear - birthDate.getFullYear()

    if(currentDateMonth < birthDate.getMonth()){
        age--
    }
    else{
        if(currentDateDay <= birthDate.getDate()){
            age--
        }
    }

    output.value = "You are " + age + " years old."
}
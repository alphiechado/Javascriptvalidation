//Database//
const userDatabase = {
    "Alfredo": {
        firstName: "Alfred",
        lastName: "Chado",
        email: "alfredo2022@gmail.com",
        accountActivated: "true",
        password: "12345678",
    },
    "Emili": {
        firstName: "Emile",
        lastName: "Ichigo",
        email: "ichigo@gmail.com",
        accountActivated: "false",
        password: "byakuyaj",
    },
    "Sebon": {
        firstName: "Sebonzakura",
        lastName: "Kageyoshi",
        email: "Kageyoshi@gmail.com",
        accountActivated: "false",
        password: "Dante1999"
    },
    "Asta": {
        firstName: "Asta",
        lastName: "Yuno",
        email: "alfredo2022@gmail.com",
        accountActivated: "true",
        password: "hunchomalik",
    }

}

function displayUserDetails(){
    //Enter username //
    let userName = prompt('Enter your username')
    while(validateuserName(userName) == false){
        userName = prompt('Username incorrect')
    }
    if (userName == null){
        return
    }

    //Enter password//
    let password = prompt('Enter your password')
    while(validatepassword(userName) == false){
        password = prompt('Password incorrect')
    }

    if (password == null){
        return
    }

    //Confirm password//
    let passwordConfirm = prompt('Confirm your password')
    while (passwordConfirm !== password){
        passwordConfirm = prompt('password incorrect, enter correct password')
    }
    if (password == null){
        return
    }

    console.log(userName, password, password)
    alert('Welcome to a new dispensation')

    //check database//
    const user = userDatabase[userName]
    if (user == undefined){
        alert('Account not found please register')
        return
    }
    //console.log(user)
    alert(`Account found with following details:
            firstName: ${user.firstName}
            lastName: ${user.lastName}
            email: ${user.email}
            accountActivated: ${user.accountActivated}
        `)
}
displayUserDetails()



function validateuserName(userName){
    if (userName == null){
        return true
    }
    if (userName.length > 10){
        return false
    }
    else{
        return true
    }
}
function validatepassword(password){
    if (password == null){
        return true
    }
    if (password.length > 6){
        return true
    }
    else{
        return true
    }
} 
console.log('alfred')      




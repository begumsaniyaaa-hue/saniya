function checkPassword(password)
{
    let i =0;
    

    do{
        if(password[i]=="1234"){
            return "Password correct";
        }

        i++;
    }while(i<password.length);

    return "Password Failed";
}

console.log(checkPassword(["1111","5678","1234"]));
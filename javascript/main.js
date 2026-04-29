// conditional statements -- control the behaviour in js and determine whether a piece of code can run

//if & else
// if -- checks for postive condition /true condition
//else --checks if there is no postive condution

let condition= true;
if(condition){
    console.log("body/message")
  }
else{
    console.log("false")
}

let age = 18;

if(age > 18) {
    console.log("You can enter");
}
else {
    console.log("wewe enda home");
}

  if(age > 18){
    console.log("You can enter");

}
else if (age ==18){
    console.log("Wacha kijana aiingie");

}
else{
    console.log("Enda home");
}

function traffic (color){
    if(color == "red"){
        console.log("STOP");
    }else if(color == "green"){
        console.log("GO");

    }else{
        console.log("Proceed with caution");
    }

}
// traffic("blue")


// age calculator
// 1 -18 --allowance
// 19 -24 -- stipend
// 25 -65 --salary
//above65 --pension


function agecalculator(age){
    if(age >=1 && age <=18){
        console.log("allowance")
    }
    else if(age >=19 && age <=24){
        console.log("stipend")
    }
    else if(age >=25 && age <=65){
        console.log("salary")
    
    }
    else {
        console.log("pension")
    }
    
}

//promocodes
// Nairobi -- 25%-- 1000;
//karibu -- 15% --10000

const crypto = require("crypto");


for(let i = 1 ; i < 1000000 ; i++){
    input = i ;
    const hashKey = crypto.createHash("sha256").update(`${i}`).digest("hex");

    const firstFive = hashKey.substring(0 , 5);
    if(check(firstFive))console.log("number : ",i , "Hashkey : " ,  hashKey  );
    
}

function check(key){
    if(key ==="00000") return true
    else return false;
}
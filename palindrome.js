function palindrome(str){
    let reverse_str="";
    for(let i=str.length-1;i>=0;i--){
reverse_str+=str[i];
    }

    if(str===reverse_str){
        return true;
    }
    return false;
}
let answer=palindrome("naman");
if(answer==true){
    console.log("Palindrome String")
}
else{
    console.log("No");
}
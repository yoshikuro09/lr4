function truncate(str, max){
   if (str.length > max){
    return str.slice(0, max-3) + "...";
   } else{
    return str;
   }
}

console.log(truncate("Добре, пока, привіт", 20));
console.log(truncate("да да да да", 5))

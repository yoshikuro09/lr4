function strikeStr(str){
    let words = str.split(" ");
    if (words.length > 3){
        return words.join("\n");
    }
    return str;
}

console.log(strikeStr("Що я хотів би розповісти на цю тему:"))
console.log(strikeStr("Всім привіт!"))
function checkSpam(str){
   let lowstr = str.toLowerCase();
   return lowstr.indexOf("росі") !== -1 || lowstr.indexOf("xxx") !== -1;
}

console.log(checkSpam('поїхати до росії'));
console.log(checkSpam('fre xxxxxx'));
console.log(checkSpam('dsdsdsdsdsdsd'));
//Translate border-left-width to borderLeftWidth
//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelize(str){
    let newString = str.split('-')
    return newString
}

console.log(camelize("This-Word"))
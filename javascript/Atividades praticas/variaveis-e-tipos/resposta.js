function verificaPalin(string){
    if(!string) return;

    return string.split('').reverse().join('')===string;
}

function verificaPalin2(string){
    if(!string) return;
    for(let i = 0;i<string.length/2;i++){
        if(string[i]!==string[string.length-1-i])return false;
    }
    return true;
}

console.log(verificaPalin2("pop"));
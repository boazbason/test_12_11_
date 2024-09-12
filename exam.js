module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission6
}




function Mission1(arr){
    return arr.filter((num)=> num % 2 == 0 )
}

function Mission2(arr){
    return arr.filter((elm)=> elm.length == 4).length;
}

function Mission3(arr){
    return arr.flat(1);
}

function Mission6(num){
    let piv = [0, 1]
    for(let i = 0; i < num; i++){
        piv.push(piv[i] + piv[i + 1])
    }
    return piv[num]
}

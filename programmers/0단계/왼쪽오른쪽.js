function solution(list) {
    const idxOfL = list.indexOf("l");
    const idxOfR = list.indexOf("r");
    
    if (idxOfL === -1 && idxOfR === -1) {
      return [];
    } else if(idxOfL !== -1 && (idxOfR === -1 || idxOfL < idxOfR)) {
        return list.slice(0, idxOfL);
    } else if(idxOfR !== -1 && (idxOfL === -1 || idxOfL > idxOfR)) {
        return list.slice(idxOfR + 1);
    }
}

// 다른 풀이
function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}

function solution(str_list) {
    const idx = str_list.findIndex(el => el === "l" || el === "r");
    return (str_list[idx] === "l") ? str_list.slice(0, idx) : 
           (str_list[idx] === "r") ? str_list.slice(idx+1) : [];
}

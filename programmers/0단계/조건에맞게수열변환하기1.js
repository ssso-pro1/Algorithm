function solution(arr) {
    const answer = [];
    
    arr.forEach((v) => {
        if (v % 2 === 0 && v >= 50) {
            v /= 2;
        } else if (v % 2 === 1 && v < 50) {
            v *= 2;
        } 
        answer.push(v);
    })
    
    return answer;
}

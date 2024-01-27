function solution(start, end) {
    let answer = [];
    for(let i = start; i >= end; i--){
        answer.push(i);
    }

    return answer;
}

// 다른 풀이
function solution(start, end) {
    return Array.from(Array(start - end + 1), (_, i) => start - i);
}
const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);

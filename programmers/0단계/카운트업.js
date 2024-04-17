function solution(start_num, end_num) {
    const answer = [];
    
    for (let i=start_num; i<=end_num; i++) {
        answer.push(i)
    }
  
    return answer;
}

// 다른 풀이
function solution(start_num, end_num) {
    return Array.from({length: end_num - start_num + 1}, (_, index) => index + start_num);
    return Array(end_num - start_num + 1).fill().map((_, index) => start_num + index);
}

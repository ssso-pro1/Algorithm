function solution(num_list) {
    let answer = 0;
    const num = num_list.length;
    
    if (num <= 10) {
        answer = num_list.reduce((a, b) => a * b, 1)
    } else {
        answer = num_list.reduce((a, b) => a + b, 0)
    }
    
    return answer;
}

// 다른 풀이
const solution = n => n.reduce((a, v) => n.length > 10 ? a + v : a * v)

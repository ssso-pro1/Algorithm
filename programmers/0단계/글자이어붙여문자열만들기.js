function solution(string, list) {
    let answer = '';
    list.map((number) => answer += string[number]);
    
    return answer;
}

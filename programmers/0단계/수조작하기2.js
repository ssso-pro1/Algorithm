function solution(log) {
    let answer = '';
    
     for (let i = 1; i < log.length; i++) {
        switch (log[i] - log[i - 1]) {
            case 1: 
                answer += "w";
                break;
            case -1:
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;
        }
    }
    
    return answer;
}

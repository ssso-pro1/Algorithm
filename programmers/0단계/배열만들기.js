function solution(n, k) {
    const answer = [];
    for(let x = 1; x <= n; x++){
        if(x % k === 0){
            answer.push(x);
        }
    }

    return answer;
}

function solution(n, k) {
    const answer = [];
    for(let x = k; x <= n; x += k){
        answer.push(x);
    }
    return answer;
}

const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))

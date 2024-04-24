function solution(myString, pat) {
    const answer = [...myString].map(v => v === 'A' ? 'B' : 'A' ).join('');
    
    return answer.includes(pat) ? 1 : 0;
}

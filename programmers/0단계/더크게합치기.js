function solution(a, b) {
    const ab = `${a}${b}`;
    const ba = `${b}${a}`;
    
    return Math.max(ab, ba);
}

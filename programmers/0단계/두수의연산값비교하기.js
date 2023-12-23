function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const ab2 = 2 * a * b;
    
    return ab === ab2 ? ab : Math.max(ab, ab2);
}

// 리팩토링
    return Math.max((ab, ab2), ab);

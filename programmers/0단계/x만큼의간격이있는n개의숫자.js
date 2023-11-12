function solution(x, n) {
    return Array(n).fill(x).map((v, i) => v * (i + 1));
}

function solution(arr, k) {
    return arr.map(v => k % 2 ? v * k : v + k);
}

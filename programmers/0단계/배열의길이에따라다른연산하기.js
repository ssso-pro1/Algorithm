function solution(arr, n) {
    return arr.map((value, index) => arr.length % 2 === index % 2 ? value: value + n);
}

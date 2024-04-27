function solution(list, n) {
    return list.filter((_, i) => i % n === 0);
}

// 다른 풀이
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))

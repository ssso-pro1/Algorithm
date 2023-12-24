function solution(num_list, n) {
    return num_list.slice(n).concat(num_list.slice(0, n));
}
// 다른 풀이
function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list;
}

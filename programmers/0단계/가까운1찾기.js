function solution(arr, idx) {
    return arr.findIndex((v, i) => i >= idx && v === 1);
}

function solution(arr, idx) {
	return arr.indexOf(1, idx);
}

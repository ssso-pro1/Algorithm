function solution(num_list) {
    const even = num_list.filter(num => num % 2 === 0).reduce((a, b) => a + b, '');
    const odd = num_list.filter(num => num % 2 !== 0).reduce((a, b) => a + b, '');
    
    return Number(even) + Number(odd);
};

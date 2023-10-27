function solution(num_list) {
    let sum = 0;
    let multi = 1;
    
    for (let i of num_list) {
        sum += i; 
        multi *= i;
    }
    
    return multi < sum**2 ? 1 : 0;
}

x ** y => x의 y제곱

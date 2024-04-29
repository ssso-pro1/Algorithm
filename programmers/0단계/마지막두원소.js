function solution(list) {
    const [sec, last] = list.slice(-2);
    
    const minus = last - sec;
    const multiple = last * 2;
    
    return [...list, last > sec ? minus : multiple];
}

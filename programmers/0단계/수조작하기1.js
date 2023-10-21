function solution(n, control) {
    return [...control].reduce((acc, cur) => {
        switch(cur) {
            case 'w':
                return acc + 1;
            case 's':
                return acc - 1;
            case 'd':
                return acc + 10;
            case 'a':
                return acc - 10;
            default:
                return acc;
        }
    }, n)
}

// 다른 풀이
function solution (n, control) {
    for (let i= 0; i < control.length; i++) {
        switch (control[i]) {
            case 'w':
                n++
                break
            case 's':
                n--
                break
            case 'd':
                n+= 10
                break
            case 'a':
                n-= 10
                break
        }
    }

    return n;
}

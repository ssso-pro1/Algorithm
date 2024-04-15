function solution(num_list) {
    let answer = 0;
    
    for (let v of num_list) {
        while ( v !== 1 ) {
            switch (v % 2) {
                case 0:
                    v = v / 2; // v /= 2;
                    answer += 1;
                    break;
                case 1:
                    v = ( v - 1 ) / 2; // v -= 1; v /= 2;
                    answer += 1;
                    break;
            }
        }
    }
    
    return answer;
}

// function solution(num_list) {
//     let answer = 0;
    
//     num_list.forEach(v => {
//         while ( v !== 1 ) {
//             if ( v % 2 === 0 ) {
//                 v = v / 2;
//                 answer += 1;
//             } else {
//                 v = ( v - 1 ) / 2;
//                 answer += 1;
//             }
//         }
//     })
//     return answer;
// }

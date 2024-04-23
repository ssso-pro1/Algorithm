 function solution(code) {
      let answer = '';
      let mode = 0;

      code.split('').forEach((v, i) => {
          if (mode === 0) {
              if (v !== "1") {
                  if (i % 2 === 0) answer += v;
              } else {
                  mode = 1;
              }
          } else {
              if (v !== "1") {
                  if (i % 2 === 1) answer += v;
              } else {
                  mode = 0;
              }
          }
      })

      return answer.length !== 0 ? answer : 'EMPTY';
  }

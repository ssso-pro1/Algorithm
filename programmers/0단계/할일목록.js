function solution(todo_list, finished) {
    const answer = [];
    
    todo_list.forEach((item, idx) => {
        if (!finished[idx]) {
            answer.push(item);
        }
    });
    
    return answer;
}

function solution(todo_list, finished) {
    return todo_list.filter((e,i) => !finished[i]);
}

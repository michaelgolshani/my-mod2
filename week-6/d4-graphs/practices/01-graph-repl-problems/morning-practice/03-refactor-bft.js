const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // Paste your previous code here and refactor it
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    const res = [];

    while (queue.length) {
        const node = queue.shift();

        // do the thing
        res.push(node);
        // add any neighbors that haven't visited to the queue
        const neighbors = adjList[node];

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor)
            }
        });
    }

    console.log(res);
    return res;
}

console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                        // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]

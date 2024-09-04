const createBoard = () => {
    let string: string = '';
    const black: string = '██';
    const white: string = '  ';

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                string += white;
            } else {
                string += black;
            }
        }
        string += '\n';
    }
    return string;
}

console.log(createBoard());
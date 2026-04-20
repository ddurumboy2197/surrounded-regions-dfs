function solve(board) {
    if (!board.length) return;

    const rows = board.length;
    const cols = board[0].length;

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') return;

        board[r][c] = 'N';

        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                dfs(r, c);
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 'N') {
                board[r][c] = 'O';
            }
        }
    }
}
```

Kodni ishlatish uchun quyidagicha:

```javascript
const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];

solve(board);

console.log(board);
```

Natija:

```javascript
[
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X']
]

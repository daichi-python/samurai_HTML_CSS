// javascript単体でpromptを使用するソースに下記変数をそのままコピー&ペースト
let readline = require('readline-sync');

// 対象の変数を下記の様に書き直す
// let command = prompt('敵が現れた！（【1】攻撃　【2】逃げる）');
let comannd = readline.question('敵が現れた！（【1】攻撃　【2】逃げる）');

// コンソールでの値の入力が変数に格納されていることを確認
console.log(comannd);

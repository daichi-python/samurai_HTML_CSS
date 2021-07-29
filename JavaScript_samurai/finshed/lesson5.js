const commandBattleGame = () => {
    let enemyHp = 10;
    let command = '';
    let flag = true;
    
    while (enemyHp >= 0) {
        if (flag === false) {
            break;
        }
        
        // command = prompt("敵が現れた！（【1】攻撃　【2】逃げる）");
        command = '1'
        switch (command) {
            case '1':
                let userPower = Math.floor(Math.random() * 10);
                console.log(`${userPower}の攻撃！`);
                enemyHp -= userPower;
                console.log(`残りの体力は${enemyHp}です`);
                break;
            case '2':
                console.log("無事に逃げました");
                flag = false;
                break;
        }
        
    if (enemyHp <= 0) {
        console.log("敵を倒した！");
        console.log("ゲーム終了");
    }
    }
};

commandBattleGame();
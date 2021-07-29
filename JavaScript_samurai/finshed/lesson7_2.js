let readline = require('readline-sync');

const user = {
    name: readline.question("名前を入力してください"),
    phoneNumber: readline.question("電話番号を入力してください"),
    
    getInformation: function() {
        console.log(this);
    }
};

user.getInformation();
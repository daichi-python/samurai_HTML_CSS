const weigh = (weight) => {
    if (weight >= 80) {
        console.log("もっと頑張りましょう");
    } else if (weight >= 70) {
        console.log("確実に成果が出ていますよ");
    } else if (weight >= 60) {
        console.log("ついにここまで来ましたね");
    } else {
        console.log("ダイエット成功です");
    }
}
weigh(76);


const getAnimalBarks = (animal) => {
    switch (animal) {
        case "犬":
            console.log("ワンワン！");
            break;
        case "猫":
            console.log("にゃーん！");
            break;
        case "牛":
            console.log("モー！");
            break;
        case "ライオン":
            console.log("ガオー！");
            break;
        default:
            console.log("ブー！");
    }
}

getAnimalBarks("犬");
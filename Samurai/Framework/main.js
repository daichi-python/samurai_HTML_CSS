const angular = document.getElementById("angular-bar");
const vue = document.getElementById("vue-bar");
const jquary = document.getElementById("jquery-bar");
const react = document.getElementById("react-bar");
const riot = document.getElementById("riot-bar");

const showDetail = (language) => {
    switch (language) {
        case "angular":
            const angDetail = document.getElementById("ang-detail");
            angDetail.classList.toggle("detail");
            break;
        case "vue":
            const vueDetail = document.getElementById("vue-detail");
            vueDetail.classList.toggle("detail");
            break;
        case "jquary":
            const jquDetail = document.getElementById("jqu-detail");
            jquDetail.classList.toggle("detail");
            break;
        case "react":
            const reaDetail = document.getElementById("rea-detail");
            reaDetail.classList.toggle("detail");
            break;
        case "riot":
            const riotDetail = document.getElementById("riot-detail");
            riotDetail.classList.toggle("detail");
            break;
    } 
};

angular.addEventListener('click', () => {
    showDetail("angular");
});

vue.addEventListener('click', () => {
    showDetail("vue");
});

jquary.addEventListener('click', () => {
    showDetail("jquary");
});

react.addEventListener('click', () => {
    showDetail("react");
});

riot.addEventListener('click', () => {
    showDetail("riot");
});
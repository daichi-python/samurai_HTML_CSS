const angular = document.getElementById("angular-bar");

const showDetail = (language) => {
    switch (language) {
        case "angular":
            const angDetail = document.getElementById("ang-detail");
            angDetail.classList.toggle("detail");
    } 
};

angular.addEventListener('click', () => {
    showDetail("angular");
});
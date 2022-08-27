let rotFlag = true;
let element = document.querySelector(".icon-arrow");
let rotateArrow = () => {
    if(rotFlag) {
        element.classList.add("icon-arrow-rotate");
    }else {
        element.classList.remove("icon-arrow-rotate");
    }
    rotFlag = !rotFlag;
};
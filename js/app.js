let nextDom = document.getElementById('next');
let prewDom = document.getElementById('prew');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');



nextDom.onclick = function () {
    showSlider('next')
}

prewDom.onclick = function () {
    showSlider('prew')
}


let timeRunning = 3000;
let runTimeOut;
// let timeAutoNext = 7000;
// let runAutoRun = setTimeout(() => {
//     nextDom.click()
// }, timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next')
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem])
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prew')
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prew')
    }, timeRunning)

    // clearTimeout(runAutoRun);
    // runAutoRun = setTimeout(() => {
    //     nextDom.click()
    // }, timeAutoNext)
}
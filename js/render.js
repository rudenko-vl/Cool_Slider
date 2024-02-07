import { data } from "./data.js";
const carousel = document.querySelector('.carousel');
const details = document.querySelector('.details');
const container = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
// =============
const uaBtn = document.getElementById('ua');
const enBtn = document.getElementById('en');

let pageLanguage;
let hash = localStorage.getItem("currentLng");

uaBtn.onclick = () => {
    setLngToLocalStor(uaBtn)
}
enBtn.onclick = () => {
    setLngToLocalStor(enBtn)
}

function setLngToLocalStor(el) {
    let lang = el.textContent;
    localStorage.setItem("currentLng", lang);
    location.reload();
}


function changeLanguage() {
    if (hash === null) {
        hash = 'en'
    } else {
        pageLanguage = hash;
    }

    let lang;
    switch (pageLanguage) {
        case 'en':
            lang = 'en'
            break;
        case 'ua':
            lang = 'ua'
            break;

        default:
            lang = 'en';
            break;
    }
    return lang;
}
changeLanguage()

// ==================

const addDataToHTML = () => {
    container.innerHTML = "";
    if (data.length > 0) {
        data.forEach((item) => {
            let newItem = document.createElement("div");
            let newThumbItem = document.createElement("div");
            newItem.classList.add("item");
            newThumbItem.classList.add("item");
            newItem.innerHTML = `
      <img src="${item.img}" alt="${item.alt}">
                <div class="content">
                    <div class="title">${item.title[hash]}</div>
                    <div class="topic lng-topic">${item.topic[hash]}</div>
                    <div class="des">${item.des[hash]}</div>
                    <div class="buttons">
                        
                        <a class="hui" id = "${item.id}">${item.btn1[hash]}</a>
                    </div>
                </div>
            `;
            newThumbItem.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
                <div class="content">
                    <h3 class="title">${item.topic[hash]}</h3>
                </div>
            `
            container.appendChild(newItem);
            thumbnail.appendChild(newThumbItem);
        });
    }
};

addDataToHTML()

// < button id = "${item.id}" > ${ item.btn1[hash] }
//                     </button >
const detBnt = document.querySelectorAll('.hui')
console.log(detBnt);
detBnt.forEach((button) => {
    button.onclick = () => {
        carousel.style.display = 'none';
        details.style.display = 'flex';
    }
})
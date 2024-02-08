import { data } from "./data.js";
const carousel = document.querySelector('.carousel');
const details = document.querySelector('.details');
const backBtn = document.querySelector('.back-btn');
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
            let detailsItem = document.createElement("section");
            detailsItem.id = item.topic.en.toLowerCase()
            newItem.classList.add("item");
            newThumbItem.classList.add("item");
            newItem.innerHTML = `
      <img src="${item.img}" alt="${item.alt}">
                <div class="content">
                    <div class="title">${item.title[hash]}</div>
                    <div class="topic lng-topic">${item.topic[hash]}</div>
                    <div class="des">${item.des[hash]}</div>
                    <div class="buttons">
                        
                        <a class="see-more" id = "${item.id}${item.topic.en}">${item.btn1[hash]}</a>
                    </div>
                </div>
            `;
            newThumbItem.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
                <div class="content">
                    <h3 class="title">${item.topic[hash]}</h3>
                </div>
            `
            detailsItem.innerHTML = `
            <h2>${item.topic[hash]}</h2>
            <div class="content">
             <img src="${item.img}" alt="${item.alt}">
            <p>${item.description[hash]}</p>
            </div>
            `
            container.appendChild(newItem);
            thumbnail.appendChild(newThumbItem);
            details.appendChild(detailsItem)
        });
    }
};

addDataToHTML()

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const detBnt = document.querySelectorAll('.see-more')

detBnt.forEach((button) => {
    button.onclick = () => {
        carousel.style.display = 'none';
        details.style.display = 'flex';
        let sectionId = button.id.substring(1).toLowerCase();
        setTimeout(() => {
            scrollToSection(sectionId)
        }, 500)
    }
})

backBtn.onclick = () => {
    carousel.style.display = 'block';
    details.style.display = 'none';
}

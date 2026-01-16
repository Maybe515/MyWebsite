import { initModal } from "./modal.js";

const fanartGrid = document.getElementById("fanartGrid");
const BASE_PATH = "/assets/img/fanart/";
let images = [];

export async function loadFanart() {
    const res = await fetch("/data/fanart/fanart-list.json");
    images = await res.json();

    images.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "fanart-item";

        wrapper.innerHTML = `
            <div class="fanart-thumb">
                <img src="${BASE_PATH}${item.src}"
                     alt="${item.caption}"
                     data-full="${BASE_PATH}${item.full}"
                     data-caption="${item.caption}">
            </div>
            <p class="fanart-caption">${item.caption}</p>
        `;

        wrapper.querySelector("img").addEventListener("click", () => openModal(index));
        fanartGrid.appendChild(wrapper);
    });

    initModal();
}

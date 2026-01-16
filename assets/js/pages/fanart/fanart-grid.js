import { initModal } from "./modal.js";
import { getBasePath } from "../../utils/base-path.js";

const fanartGrid = document.getElementById("fanartGrid");
const BASE_PATH = getBasePath()
const JSON_PATH = BASE_PATH + "/data/fanart/fanart-list.json";
const IMG_PATH = BASE_PATH + "/assets/img/fanart/";
let images = [];

export async function loadFanart() {
    const res = await fetch(JSON_PATH);
    images = await res.json();

    images.forEach((item, index) => {
        const wrapper = document.createElement("div");
        wrapper.className = "fanart-item";

        wrapper.innerHTML = `
            <div class="fanart-thumb">
                <img src="${IMG_PATH}${item.src}"
                     alt="${item.caption}"
                     data-full="${IMG_PATH}${item.full}"
                     data-caption="${item.caption}">
            </div>
            <p class="fanart-caption">${item.caption}</p>
        `;

        wrapper.querySelector("img").addEventListener("click", () => openModal(index));
        fanartGrid.appendChild(wrapper);
    });

    initModal();
}

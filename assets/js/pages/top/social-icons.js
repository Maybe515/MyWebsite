import { getBasePath } from "../../utils/base-path.js";
const BASE_PATH = getBasePath();
const JSON_PATH = BASE_PATH + "/data/top/social-links.json";
const IMG_PATH = BASE_PATH + "/assets/img/social/";

export async function initSocialIcons() {
    const res = await fetch(JSON_PATH);
    const data = await res.json();

    const primaryContainer = document.querySelector(".social-icons");
    const moreContainer = document.querySelector(".social-more");

    // メインアイコン生成
    data.primary.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.className = `social-icon ${item.class || ""}`;

        a.innerHTML = `
            <img src="${IMG_PATH}${item.icon}" alt="${item.name}">
        `;

        primaryContainer.appendChild(a);
    });

    // 「もっと見る」アイコン生成
    data.more.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.className = "social-icon";

        a.innerHTML = `
            <img src="${IMG_PATH}${item.icon}" alt="${item.name}">
        `;

        moreContainer.appendChild(a);
    });
}

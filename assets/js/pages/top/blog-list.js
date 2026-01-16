import { getBasePath } from "../../utils/base-path.js";
const JSON_PATH = getBasePath() + "/data/top/blog-links.json";

export async function initBlogList() {
    const res = await fetch(JSON_PATH);
    const newsList = await res.json();

    const ul = document.querySelector(".blog-list");
    if (!ul) return;

    newsList.forEach(item => {
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="${item.url}" target="_blank">
                ${item.title}
            </a>
        `;

        ul.appendChild(li);
    });
}

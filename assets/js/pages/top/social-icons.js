export async function initSocialIcons() {
    const res = await fetch("/data/top/social-links.json");
    const data = await res.json();

    const primaryContainer = document.querySelector(".social-icons");
    const moreContainer = document.querySelector(".social-more");

    const BASE_PATH = "/assets/img/social/";

    // メインアイコン生成
    data.primary.forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.className = `social-icon ${item.class || ""}`;

        a.innerHTML = `
            <img src="${BASE_PATH}${item.icon}" alt="${item.name}">
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
            <img src="${BASE_PATH}${item.icon}" alt="${item.name}">
        `;

        moreContainer.appendChild(a);
    });
}

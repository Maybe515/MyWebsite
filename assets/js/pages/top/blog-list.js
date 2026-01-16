export async function initBlogList() {
    const res = await fetch("/data/top/blog-links.json");
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

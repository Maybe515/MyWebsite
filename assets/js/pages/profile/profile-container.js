import { getBasePath } from "../../utils/base-path.js";
const BASE_PATH = getBasePath();
const JSON_PATH = BASE_PATH + "/data/profile/profile-contents.json";

export async function initProfile() {
    const res = await fetch(JSON_PATH);
    const data = await res.json();

    /* ================================
       Skills
    ================================= */
    const skillContainer = document.querySelector(".profile-skills");

    // Programing（frontend / backend / tools）
    const programingBlock = document.createElement("div");
    programingBlock.className = "skills-group";
    programingBlock.innerHTML = `<h4>Programing</h4>`;
    skillContainer.appendChild(programingBlock);

    ["frontend", "backend", "tools"].forEach(category => {
        if (!data.skills[category]) return;

        const block = document.createElement("div");
        block.className = "skill-block";

        block.innerHTML = `
            <h5>${category}</h5>
            <ul>
                ${data.skills[category].map(skill => `<li>${skill}</li>`).join("")}
            </ul>
        `;

        programingBlock.appendChild(block);
    });

    // Others（必要なら）
    const othersBlock = document.createElement("div");
    othersBlock.className = "skills-group";
    othersBlock.innerHTML = `<h4>Others</h4>`;
    skillContainer.appendChild(othersBlock);


    /* ================================
       Links
    ================================= */
    const linkContainer = document.querySelector(".profile-links");

    data.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.className = "profile-link";

        a.innerHTML = `
            <img src="${BASE_PATH}/assets/img/icons/${link.icon}" alt="${link.name}">
            <span>${link.name}</span>
        `;

        linkContainer.appendChild(a);
    });


    /* ================================
       Timeline（左右交互ステップ型）
    ================================= */
    const timeline = document.querySelector(".profile-timeline");

    // 月 → 英語表記
    const monthNames = {
        "1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr",
        "5": "May", "6": "Jun", "7": "Jul", "8": "Aug",
        "9": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"
    };

    // 年を降順にソート
    const sortedYears = Object.entries(data.timeline)
        .sort((a, b) => Number(b[0]) - Number(a[0]));

    let index = 0; // 左右交互のためのカウンタ

    sortedYears.forEach(([year, items]) => {

        // 年の見出し（左右交互の対象外）
        const yearItem = document.createElement("li");
        yearItem.className = "timeline-item timeline-year";
        yearItem.textContent = year;
        yearItem.style.width = "100%"; // 中央に表示
        yearItem.style.textAlign = "center";
        timeline.appendChild(yearItem);

        // 月を降順にソート
        items
            .sort((a, b) => Number(b.month) - Number(a.month))
            .forEach(entry => {

                const li = document.createElement("li");
                li.className = "timeline-item";

                // 左右交互に class を付与
                li.classList.add(index % 2 === 0 ? "left" : "right");
                index++;

                li.innerHTML = `
                    <div class="timeline-month">${monthNames[entry.month]}</div>
                    <div class="timeline-event">${entry.event}</div>
                `;

                timeline.appendChild(li);
            });
    });
}

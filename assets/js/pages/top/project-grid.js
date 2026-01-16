import { getBasePath } from "../../utils/base-path.js";
const JSON_PATH = getBasePath() + "/data/top/project-cards.json";

// プロジェクトグリッド作成
export async function initProjects() {
    const res = await fetch(JSON_PATH);
    const projects = await res.json();

    const grid = document.querySelector(".project-grid");
    if (!grid) return;

    projects.forEach(project => {
        const card = document.createElement("a");
        card.href = project.url;
        card.target = "_blank";
        card.className = `project-card card-base lang-${project.langs[0]}`;

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-langs">
                ${project.langs
                    .map(lang => `<span class="project-lang lang-${lang}">${lang.toUpperCase()}</span>`)
                    .join("")}
            </div>
        `;

        grid.appendChild(card);
    });
}

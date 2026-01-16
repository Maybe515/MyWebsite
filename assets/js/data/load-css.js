import { getBasePath } from "../utils/base-path.js";
const CSS_PATH = getBasePath() + "/assets/css";

const cssFiles = [
    "/foundation/base.css",
    "/foundation/layout.css",
    "/components/buttons.css",
    "/components/cards.css",
    "/components/header.css",
    "/components/hero.css",
    "/components/sections.css",
    "/pages/top/gallery.css",
    "/pages/top/projects.css",
    "/pages/top/sidebar.css",
    "/pages/top/slideshow.css",
    "/pages/top/social.css",
    "/pages/fanart/fanart.css",
    "/pages/fanart/modal.css",
    "/pages/profile/profile.css",
    "/foundation/responsive.css"
];

// CSS 読み込み
export function loadCssFiles() {
    cssFiles.forEach(path => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = CSS_PATH + path;
        document.head.appendChild(link);
    });
}

loadCssFiles();
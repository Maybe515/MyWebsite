// CSS 読み込み
const BASE_PATH = "/assets/css"

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

export function loadCssFiles() {
    cssFiles.forEach(path => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = BASE_PATH + path;
        document.head.appendChild(link);
    });
}

loadCssFiles();
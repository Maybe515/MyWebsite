// CSS 自動読み込み
const cssFiles = [
    "assets/css/base.css",
    "assets/css/layout.css",
    "assets/css/responsive.css",
    "assets/css/components/cards.css",
    "assets/css/components/gallery.css",
    "assets/css/components/projects.css",
    "assets/css/components/sections.css",
    "assets/css/components/sidebar.css",
    "assets/css/components/slideshow.css",
    "assets/css/components/social.css"
];

cssFiles.forEach(path => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.head.appendChild(link);
});

// 初期化処理
import { initHeaderOffset } from "./header-offset.js";
import { initSlideshow } from "./slideshow.js";
import { initSidebarToggle } from "./sidebar-toggle.js";
import { initSocialToggle } from "./social-toggle.js";
import { updateDeviceState } from "./responsive-state.js";

initHeaderOffset();
initSlideshow();
initSidebarToggle();
initSocialToggle();
updateDeviceState();

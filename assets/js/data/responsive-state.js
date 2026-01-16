// サイドバー高さ調整
function updateSidebarHeight() {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return;

    const headerHeight = document.querySelector("header").offsetHeight;
    const sideToggleHeight = 52;
    const margin = 12;

    const layout = document.querySelector(".layout");
    const layoutPaddingTop = parseInt(getComputedStyle(layout).paddingTop);

    const isMobile = document.body.classList.contains("is-mobile");

    const baseOffset = headerHeight + margin + layoutPaddingTop;
    const mobileExtra = sideToggleHeight + layoutPaddingTop;

    const offset = isMobile ? baseOffset + mobileExtra : baseOffset;
    document.documentElement.style.setProperty("--sidebar-top", offset + "px");
}

// PC/Mobile UI切り替え
export function updateDeviceState() {
    if (window.innerWidth <= 825) {
        document.body.classList.add("is-mobile");
        document.body.classList.remove("is-pc");
    } else {
        document.body.classList.add("is-pc");
        document.body.classList.remove("is-mobile");
    }

    updateSidebarHeight();
}

updateDeviceState();
window.addEventListener("load", updateDeviceState);
window.addEventListener("resize", updateDeviceState);
window.addEventListener("orientationchange", updateDeviceState);

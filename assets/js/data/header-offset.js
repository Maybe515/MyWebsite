// ヘッダー高さ取得
export function initHeaderOffset() {
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector(".site-header");

        if (!header) return;

        const updateOffset = () => {
            const height = header.offsetHeight;
            document.documentElement.style.setProperty("--header-height", `${height}px`);
        };

        updateOffset();
        window.addEventListener("load", updateOffset);
        window.addEventListener("resize", updateOffset);
    });
}

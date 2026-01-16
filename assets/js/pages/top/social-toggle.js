export function initSocialToggle() {
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".social-toggle");
        const more = document.querySelector(".social-more");

        if (!toggle || !more) return;

        toggle.addEventListener("click", () => {
            const isOpen = more.classList.contains("open");
            const style = window.getComputedStyle(more);
            const paddingBottom = parseInt(style.paddingBottom);
            const padding = 18;

            if (isOpen) {
                more.style.maxHeight = "0px";
                more.style.paddingBottom = paddingBottom - padding + "px";
                more.classList.remove("open");
                toggle.textContent = "▼ もっと見る";
            } else {
                const paddingTop = parseInt(style.paddingTop);

                more.style.maxHeight = (more.scrollHeight + paddingTop + paddingBottom) + "px";
                more.style.paddingBottom = paddingBottom + padding + "px";
                more.classList.add("open");
                toggle.textContent = "▲ 閉じる";
            }
        });
    });
}

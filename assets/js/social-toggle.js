// social-toggle.js

export function initSocialToggle() {
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".social-toggle");
        const more = document.querySelector(".social-more");

        if (!toggle || !more) return;

        toggle.addEventListener("click", () => {
            const isOpen = more.classList.contains("open");

            if (isOpen) {
                more.style.maxHeight = "0px";
                more.classList.remove("open");
                toggle.textContent = "▼ もっと見る";
            } else {
                const style = window.getComputedStyle(more);
                const paddingTop = parseInt(style.paddingTop);
                const paddingBottom = parseInt(style.paddingBottom);

                more.style.maxHeight = (more.scrollHeight + paddingTop + paddingBottom) + "px";
                more.classList.add("open");
                toggle.textContent = "▲ 閉じる";
            }
        });
    });
}

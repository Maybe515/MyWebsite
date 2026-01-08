// sidebar-toggle.js
export function initSidebarToggle() {
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".side-toggle");
        const pane = document.querySelector(".sidebar");

        if (!toggle || !pane) return;

        toggle.addEventListener("click", () => {
            pane.classList.toggle("open");
        });
    });
}

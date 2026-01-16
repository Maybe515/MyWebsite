// sidebar-toggle.js
export function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".side-toggle");

    if (!sidebar || !toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}

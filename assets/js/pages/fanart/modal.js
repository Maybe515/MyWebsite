let images = [];
let currentIndex = 0;

export function initModal() {
    images = [...document.querySelectorAll(".fanart-item img")];

    const modal = document.getElementById("fanartModal");
    const modalImg = document.getElementById("fanartModalImg");
    const modalCaption = document.getElementById("fanartModalCaption");
    const modalClose = document.getElementById("fanartModalClose");
    const prevBtn = document.getElementById("fanartPrev");
    const nextBtn = document.getElementById("fanartNext");

    // モーダルを開く
    function openModal(index) {
        currentIndex = index;
        const img = images[index];

        modalImg.src = img.dataset.full;
        modalCaption.textContent = img.dataset.caption || "";
        modal.classList.add("open");
    }

    // モーダルを閉じる
    function closeModal() {
        modal.classList.remove("open");
    }

    // 次へ
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        openModal(currentIndex);
    }

    // 前へ
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal(currentIndex);
    }

    // 画像クリックで開く
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // キーボード操作
    document.addEventListener("keydown", e => {
        if (!modal.classList.contains("open")) return;

        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });
}
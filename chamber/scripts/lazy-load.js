document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".photo-grid");

    const removeBlur = (image) => {
        image.classList.remove("lazy"); // remove class 'lazy'
    };

    const observeImages = () => {
        const lazyImages = document.querySelectorAll("img.lazy");
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    removeBlur(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        lazyImages.forEach((img) => {
            intersectionObserver.observe(img);
        });
    };

    const mutationObserver = new MutationObserver(() => {
        observeImages();
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    observeImages();
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.horizontal-scroll-wrapper');
    const scrollPages = document.querySelectorAll('.scroll-page');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentPage = 0;

    function scrollToPage(pageIndex) {
        scrollContainer.scrollLeft = pageIndex * scrollPages[0].offsetWidth;
    }

    scrollPages.forEach((page, index) => {
        page.addEventListener('click', () => {
            scrollToPage(index);
        });
    });

    prevButton.addEventListener('click', () => {
        currentPage = (currentPage - 1.5 + scrollPages.length) % scrollPages.length;
        scrollToPage(currentPage);
    });

    nextButton.addEventListener('click', () => {
        currentPage = (currentPage + 1.5) % scrollPages.length;
        scrollToPage(currentPage);
    });
});
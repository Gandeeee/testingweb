document.addEventListener('DOMContentLoaded', function() {

    // Inisialisasi AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
    });

    // Transisi Navbar saat di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
// === Optimasi Load Peta Google Maps pada Carousel ===
const lokasiCarousel = document.getElementById('lokasiCarousel');

function loadMapForActiveSlide() {
    // Cari slide yang sedang aktif
    const activeSlide = lokasiCarousel.querySelector('.carousel-item.active');
    if (activeSlide) {
        // Cari iframe di dalam slide aktif
        const iframe = activeSlide.querySelector('iframe');
        // Jika iframe ada dan belum punya src, isi src dari data-src
        if (iframe && !iframe.getAttribute('src')) {
            const mapSrc = iframe.getAttribute('data-src');
            iframe.setAttribute('src', mapSrc);
        }
    }
}

// Langsung load peta untuk slide pertama saat halaman dibuka
loadMapForActiveSlide();

// Tambahkan event listener, setiap kali slide selesai berganti, panggil fungsi load map
lokasiCarousel.addEventListener('slid.bs.carousel', loadMapForActiveSlide);

    // Tombol Scroll to Top
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Update Tahun Copyright di Footer
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
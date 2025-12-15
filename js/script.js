// Parkin Sound - Professional Audio Rental Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top button
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll to contact section
    window.scrollKontak = function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    };
    
    // Gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Video modal
    const videoModal = document.getElementById('videoModal');
    
    window.toggleVideo = function() {
        videoModal.style.display = videoModal.style.display === 'flex' ? 'none' : 'flex';
    };
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            toggleVideo();
        }
    });
    
    // Contact form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const eventType = document.getElementById('event-type').value;
        const eventDate = document.getElementById('event-date').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll just show an alert
        alert(`Terima kasih ${name}! Permintaan penawaran untuk acara ${eventType} pada tanggal ${eventDate} telah berhasil dikirim. Tim kami akan menghubungi Anda melalui ${phone} atau ${email} dalam waktu 1x24 jam.`);
        
        // Reset form
        bookingForm.reset();
        
        // Scroll to top of contact section
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // In a real application, you would send this data to a server
        alert(`Terima kasih telah berlangganan newsletter kami dengan email: ${email}. Anda akan menerima informasi terbaru dari Parkin Sound.`);
        
        // Reset form
        newsletterForm.reset();
    });
    
    // Animate elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                
                // Add different animations based on element type
                if (entry.target.classList.contains('card')) {
                    entry.target.classList.add('animate__fadeInUp');
                } else if (entry.target.classList.contains('about-text')) {
                    entry.target.classList.add('animate__fadeInLeft');
                } else if (entry.target.classList.contains('about-image')) {
                    entry.target.classList.add('animate__fadeInRight');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .about-text, .about-image').forEach(el => {
        observer.observe(el);
    });
    
    // Initialize current year in footer
    document.querySelector('.footer-bottom p').innerHTML = 
        document.querySelector('.footer-bottom p').innerHTML.replace('2025', new Date().getFullYear());
    
    // Set min date for event date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('event-date').setAttribute('min', today);
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    });
});
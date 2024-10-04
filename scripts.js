document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    });

    // Project showcase slideshow
    const projectSlides = document.querySelectorAll('.project-slide');
    let currentSlide = 0;
    setInterval(() => {
        projectSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % projectSlides.length;
        projectSlides[currentSlide].classList.add('active');
    }, 5000);

    // Animated skill progress bars
    const skillBars = document.querySelectorAll('.skills-progress-bar');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width');
            }
        });
    }, observerOptions);
    skillBars.forEach(bar => observer.observe(bar));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animated counter
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const step = target / (duration / 16); // 60 FPS
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            el.textContent = Math.round(current);
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    const counterElements = document.querySelectorAll('.counter-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    // Animated skill icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg) scale(1.2)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Typing effect for animated title
    const titles = ['Prompt Engineer', 'AI & ML Enthusiast', 'E-Sports Athlete'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const waitTime = 1000;

    function typeTitle() {
        const currentTitle = titles[titleIndex];
        const animatedTitle = document.querySelector('.animated-title');

        if (isDeleting) {
            animatedTitle.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            animatedTitle.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeTitle, waitTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeTitle, typingSpeed);
        } else {
            setTimeout(typeTitle, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    typeTitle();

    // Download resume button
document.getElementById('download-resume').addEventListener('click', function(e) {
e.preventDefault();
// Create a Blob with some content (replace with your actual resume content)
const blob = new Blob(['This is a sample resume content.'], { type: 'text/plain' });
const url = window.URL.createObjectURL(blob);
const a = document.createElement('a');
a.style.display = 'none';
a.href = url;
a.download = 'resume.txt';
document.body.appendChild(a);
a.click();
window.URL.revokeObjectURL(url);
});
document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
}));
});
});
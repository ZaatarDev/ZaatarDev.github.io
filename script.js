// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-5');
    } else {
        navbar.classList.add('py-5');
        navbar.classList.remove('py-3');
    }
});

// Animation Observer (Replacements for Framer Motion whileInView)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target); // Run once like viewport={{ once: true }}
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Trigger navbar animation explicitly on load
window.addEventListener('load', () => {
    setTimeout(() => {
        navbar.classList.add('animate-in');
    }, 100);
});


// Copy Discord Username
const discordBtn = document.getElementById('discord-btn');
const discordText = document.getElementById('discord-text');
const iconCopy = discordBtn.querySelector('.icon-copy');
const iconCheck = discordBtn.querySelector('.icon-check');

discordBtn.addEventListener('click', () => {
    navigator.clipboard.writeText("ZaatarDev").then(() => {
        // Change UI to "Copied!"
        discordText.textContent = "Copied 'ZaatarDev'!";
        iconCopy.classList.add('hidden');
        iconCheck.classList.remove('hidden');

        // Reset after 2 seconds
        setTimeout(() => {
            discordText.textContent = "Copy Discord User";
            iconCopy.classList.remove('hidden');
            iconCheck.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});

// Smooth Scrolling without URL fragments
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

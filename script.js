        // --- Theme Toggle Logic ---
        const themeBtn = document.getElementById('theme-toggle');
        const themeIcon = themeBtn.querySelector('i');

        // Check user preference or default to dark mode
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            
            if (isLight) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });

        // --- Mobile Menu Logic ---
        const mobileBtn = document.getElementById('mobile-btn');
        const navLinks = document.getElementById('nav-links');

        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            const icon = mobileBtn.querySelector('i');
            if(navLinks.classList.contains('nav-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-open');
                mobileBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });

        // --- Scroll Reveal Animation ---
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed
                    // observer.unobserve(entry.target);
                }
            });
        };
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const revealObserver = new IntersectionObserver(revealCallback, observerOptions);
        
        // Remove .active class added by default for non-js fallback, then observe
        document.querySelectorAll('section').forEach(el => {
            el.classList.remove('active');
            revealObserver.observe(el);
        });

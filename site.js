// site.js - Kazakhstan Website

document.addEventListener('DOMContentLoaded', function() {
    const app = {
        init: function() {
            this.setupNavigation();
            this.loadContent();
        },

        setupNavigation: function() {
            const navItems = ['Home', 'About', 'Culture', 'Tourism', 'Contact'];
            const nav = document.querySelector('nav');
            
            navItems.forEach(item => {
                const link = document.createElement('a');
                link.textContent = item;
                link.href = `#${item.toLowerCase()}`;
                nav.appendChild(link);
            });
        },

        loadContent: function() {
            const content = {
                home: '<h1>Welcome to Kazakhstan</h1><p>Discover the heart of Central Asia</p>',
                culture: '<h2>Culture</h2><p>Rich traditions and heritage</p>',
                tourism: '<h2>Tourism</h2><p>Explore natural wonders and cities</p>'
            };
            
            document.getElementById('content').innerHTML = content.home;
        }
    };

    app.init();
});
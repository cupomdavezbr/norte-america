'use strict';

const App = {
    WhatsApp: {
        // COLOQUE O NÚMERO AQUI (formato internacional sem +)
        number: "551151049414", 
        
        // Mensagem genérica e oficial
        defaultMessage: "Olá! Gostaria de regularizar a mensalidade do meu plano de saúde.",
        
        open() {
            const msg = encodeURIComponent(this.defaultMessage);
            const url = `https://wa.me/${this.number}?text=${msg}`;
            window.open(url, '_blank');
        }
    },

    Animations: {
        init() {
            const elements = document.querySelectorAll('.fade-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });

            elements.forEach(el => {
                el.style.opacity = '0';
                observer.observe(el);
            });
        }
    },

    init() {
        this.Animations.init();
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());

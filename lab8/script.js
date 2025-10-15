const script = [
    {
        quote: "Найкраща агенція! Подорож на Балі була просто казковою. Усе організовано ідеально.",
        author: "Олена Мельник, клієнтка Wanderlust",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        quote: "Професійний сервіс та цікаві маршрути. Рекомендую кожному мандрівнику!",
        author: "Ігор Коваль, турист",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Команда подбала про все — від квитків до комфортного трансферу. Дякую!",
        author: "Марія Петренко",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

let current = 0;
const container = document.getElementById('testimonialContent');
const dotsWrap = document.getElementById('testimonialDots');

function renderTestimonial(i) {
    const t = script[i];
    container.innerHTML = `
        <img src="${t.avatar}" alt="Client" class="avatar">
        <blockquote>“${t.quote}”</blockquote>
        <p class="author">— ${t.author}</p>
    `;

    Array.from(dotsWrap.children).forEach((d, idx) => {
        d.classList.toggle('active', idx === i);
    });
}

function setupDots() {
    dotsWrap.innerHTML = '';
    script.forEach((_, idx) => {
        const d = document.createElement('button');
        d.className = 'dot';
        d.setAttribute('aria-label', 'Перейти до відгуку ' + (idx+1));
        d.addEventListener('click', () => {
            current = idx;
            renderTestimonial(current);
        });
        dotsWrap.appendChild(d);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + script.length) % script.length;
    renderTestimonial(current);
});
document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % script.length;
    renderTestimonial(current);
});

setupDots();
renderTestimonial(current);

let auto = setInterval(() => {
    current = (current + 1) % script.length;
    renderTestimonial(current);
}, 6000);

['prevBtn','nextBtn','testimonialContent'].forEach(id=>{
    const el = document.getElementById(id) || document.querySelector('.testimonial-content');
    if (el) el.addEventListener('mouseenter', () => clearInterval(auto));
});



document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav-links');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && e.target !== btn) {
                nav.classList.remove('show');
            }
        });
    }
});

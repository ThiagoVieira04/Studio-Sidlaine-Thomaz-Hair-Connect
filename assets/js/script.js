/* ==========================================================================
   STUDIO SIDLAINE THOMAZ HAIR - JavaScript
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURATION
   -------------------------------------------------------------------------- */

const CONFIG = {
    pixKey: '+5521988593392',
    whatsappPhone: '5521988593392',
    googleReviewUrl: 'https://g.page/r/CXUQrjKh4lJtEAE/review',
    instagramUrl: 'https://www.instagram.com/thomazsidlaine?stkn=MW5yNGI1ZWUyaGZweA%3D%3D&utm_source=qr',
    facebookUrl: 'https://www.facebook.com/sidlaine.thomaz',
    pageUrl: 'https://studio-sidlaine-thomaz-hair-connect.vercel.app/',
    wifiPassword: 'sidy1206',
    wifiSSID: 'SIDILAINE_THOMAZ-5G',
};

const BANKS = [
    { name: 'Nubank', scheme: 'nubank://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=com.nu.production', appStore: 'https://apps.apple.com/app/nubank/id814456780', color: 'linear-gradient(135deg, #820AD1, #530082)', initials: 'Nu', domain: 'nubank.com.br' },
    { name: 'Itaú', scheme: 'itau://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=com.itau', appStore: 'https://apps.apple.com/app/itau-personal/id474505665', color: 'linear-gradient(135deg, #FF7A00, #EC5E00)', initials: 'Itaú', domain: 'itau.com.br' },
    { name: 'Bradesco', scheme: 'bradesco://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=com.bradesco', appStore: 'https://apps.apple.com/app/bradesco/id336954985', color: 'linear-gradient(135deg, #CC092F, #E60042)', initials: 'Brad', domain: 'bradesco.com.br' },
    { name: 'Banco do Brasil', scheme: 'bb://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=br.com.bb.android', appStore: 'https://apps.apple.com/app/banco-do-brasil/id330984271', color: 'linear-gradient(135deg, #F2E307, #003399)', initials: 'BB', domain: 'bb.com.br' },
    { name: 'Caixa', scheme: 'caixa://', playStore: 'https://play.google.com/store/apps/details?id=br.com.gabba.Caixa', appStore: 'https://apps.apple.com/app/caixa/id490813624', color: 'linear-gradient(135deg, #005CA9, #F58220)', initials: 'CX', domain: 'caixa.gov.br' },
    { name: 'Santander', scheme: 'santanderpf://', playStore: 'https://play.google.com/store/apps/details?id=com.santander.app', appStore: 'https://apps.apple.com/app/santander/id613365711', color: 'linear-gradient(135deg, #EC0000, #B30000)', initials: 'San', domain: 'santander.com.br' },
    { name: 'Inter', scheme: 'bancointer://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=br.com.intermedium', appStore: 'https://apps.apple.com/app/inter/id839711154', color: 'linear-gradient(135deg, #FF7A00, #FF5500)', initials: 'Inter', domain: 'bancointer.com.br' },
    { name: 'PagBank', scheme: 'pagseguro://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=br.com.uol.ps.myaccount', appStore: 'https://apps.apple.com/app/pagbank/id1186059012', color: 'linear-gradient(135deg, #00C69E, #BFE02C)', initials: 'Pag', domain: 'pagbank.com.br' },
    { name: 'Mercado Pago', scheme: 'mercadopago://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=com.mercadopago.wallet', appStore: 'https://apps.apple.com/app/mercado-pago/id925436649', color: 'linear-gradient(135deg, #00B1EA, #00A650)', initials: 'MP', domain: 'mercadopago.com.br' },
    { name: 'PicPay', scheme: 'picpay://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=com.picpay', appStore: 'https://apps.apple.com/app/picpay/id561524792', color: 'linear-gradient(135deg, #21C25E, #117F3D)', initials: 'Pic', domain: 'picpay.com' },
    { name: 'Sicredi', scheme: 'sicredi://', appLink: true, playStore: 'https://play.google.com/store/apps/details?id=br.com.sicredimobi.smart', appStore: 'https://apps.apple.com/app/sicredi/id1041468908', color: 'linear-gradient(135deg, #3EA124, #66BB3F)', initials: 'Sic', domain: 'sicredi.com.br' },
    { name: 'Sicoob', scheme: 'sicoob://', playStore: 'https://play.google.com/store/apps/details?id=br.com.sicoobnet', appStore: 'https://apps.apple.com/app/sicoob/id416696406', color: 'linear-gradient(135deg, #00363A, #005F60)', initials: 'Sic', domain: 'sicoob.com.br' },
    { name: 'BTG Pactual', scheme: 'btg://', playStore: 'https://play.google.com/store/apps/details?id=com.btg.pactual.banking', appStore: 'https://apps.apple.com/app/btg-pactual/id1467956990', color: 'linear-gradient(135deg, #0B2343, #000B1A)', initials: 'BTG', domain: 'btgpactual.com' },
    { name: 'C6 Bank', scheme: 'c6bank://', playStore: 'https://play.google.com/store/apps/details?id=com.c6bank.app', appStore: 'https://apps.apple.com/app/c6-bank/id1463463143', color: 'linear-gradient(135deg, #1E1E1E, #000)', initials: 'C6', domain: 'c6bank.com.br' },
    { name: 'Neon', scheme: 'neon://', playStore: 'https://play.google.com/store/apps/details?id=br.com.neon', appStore: 'https://apps.apple.com/app/neon-cart%C3%A3o/id1127996388', color: 'linear-gradient(135deg, #00E5FF, #0055FF)', initials: 'Neon', domain: 'neon.com.br' },
    { name: 'Banrisul', scheme: 'banrisul://', playStore: 'https://play.google.com/store/apps/details?id=br.com.banrisul', appStore: 'https://apps.apple.com/app/banrisul/id1177452393', color: 'linear-gradient(135deg, #00519E, #0076D6)', initials: 'Ban', domain: 'banrisul.com.br' },
];

/* --------------------------------------------------------------------------
   2. SERVICES CONFIGURATION
   -------------------------------------------------------------------------- */

const SERVICES = [
    {
        title: 'Serviços de Cabelo',
        icon: 'fas fa-cut',
        items: [
            'Alisamentos de cabelo',
            'Apliques de cabelo',
            'Corte de cabelo',
            'Crescimento capilar',
            'Escova',
            'Luzes no cabelo',
            'Shampoo e condicionador',
            'Tratamentos com queratina'
        ]
    }
];

const CATALOG_MEDIA = [
    { type: 'video', src: 'assets/media/videos/0.mp4' },
    { type: 'video', src: 'assets/media/videos/1.mp4' },
    { type: 'video', src: 'assets/media/videos/2.mp4' },
    { type: 'video', src: 'assets/media/videos/3.mp4' },
    { type: 'video', src: 'assets/media/videos/4.mp4' },
    { type: 'video', src: 'assets/media/videos/5.mp4' },
    { type: 'video', src: 'assets/media/videos/6.mp4' },
    { type: 'video', src: 'assets/media/videos/7.mp4' },
    { type: 'video', src: 'assets/media/videos/8.mp4' },
    { type: 'video', src: 'assets/media/videos/9.mp4' },
    { type: 'video', src: 'assets/media/videos/10.mp4' },
    { type: 'video', src: 'assets/media/videos/11.mp4' },
    { type: 'video', src: 'assets/media/videos/12.mp4' },
    { type: 'video', src: 'assets/media/videos/13.mp4' },
    { type: 'video', src: 'assets/media/videos/14.mp4' },
    { type: 'video', src: 'assets/media/videos/15.mp4' },
    { type: 'video', src: 'assets/media/videos/16.mp4' },
    { type: 'video', src: 'assets/media/videos/17.mp4' }
];

const TESTIMONIALS_MEDIA = [
    { type: 'video', src: 'assets/media/videos/depo 1.mp4' },
    { type: 'video', src: 'assets/media/videos/depo 2.mp4' }
];

/* --------------------------------------------------------------------------
   3. DOM REFERENCES
   -------------------------------------------------------------------------- */

const DOM = {
    pixModal: document.getElementById('pixModal'),
    bioModal: document.getElementById('bioModal'),
    qrcodeModal: document.getElementById('qrcodeModal'),
    wifiModal: document.getElementById('wifiModal'),
    bankModal: document.getElementById('bankModal'),
    linkButtons: document.querySelectorAll('.link-button'),
    modalCloseButtons: document.querySelectorAll('.modal-close'),
    copyPixBtn: document.getElementById('copyPixBtn'),
    downloadQRBtn: document.getElementById('downloadQRBtn'),
    copyWifiBtn: document.getElementById('copyWifiBtn'),
    connectWifiBtn: document.getElementById('connectWifiBtn'),
    openBankBtn: document.getElementById('openBankBtn'),
    successMessage: document.getElementById('successMessage'),
    successText: document.getElementById('successText'),
    toast: document.getElementById('toast'),
    bankLoading: document.getElementById('bankLoading'),
    bankGrid: document.getElementById('bankGrid'),
    bankGridList: document.getElementById('bankGridList'),
    bankNotice: document.getElementById('bankNotice'),
    themeToggle: document.getElementById('themeToggle'),
    contrastToggle: document.getElementById('contrastToggle'),
    servicesList: document.getElementById('servicesList'),
};

/* --------------------------------------------------------------------------
   4. INITIALIZATION
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    detectAccessMethod();
    initLogoAnimation();
    renderServices();
    renderCatalog();
    renderTestimonials();
});

/* --------------------------------------------------------------------------
   5. EVENT LISTENERS
   -------------------------------------------------------------------------- */

function initEventListeners() {
    DOM.linkButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    DOM.modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    const mediaViewerClose = document.getElementById('mediaViewerClose');
    if (mediaViewerClose) mediaViewerClose.addEventListener('click', closeAllModals);

    const mediaViewerPrev = document.getElementById('mediaViewerPrev');
    const mediaViewerNext = document.getElementById('mediaViewerNext');
    if (mediaViewerPrev) mediaViewerPrev.addEventListener('click', () => showViewerAt(viewerIndex - 1));
    if (mediaViewerNext) mediaViewerNext.addEventListener('click', () => showViewerAt(viewerIndex + 1));

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });

    if (DOM.copyPixBtn) DOM.copyPixBtn.addEventListener('click', copyPixKey);
    if (DOM.downloadQRBtn) DOM.downloadQRBtn.addEventListener('click', downloadQRCode);
    if (DOM.copyWifiBtn) DOM.copyWifiBtn.addEventListener('click', copyWifiPassword);
    if (DOM.connectWifiBtn) DOM.connectWifiBtn.addEventListener('click', openWifiSettings);
    if (DOM.openBankBtn) DOM.openBankBtn.addEventListener('click', openBankModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });

    if (DOM.contrastToggle) DOM.contrastToggle.addEventListener('click', toggleContrast);

    document.querySelectorAll('.services-header, .catalog-header, .testimonials-header').forEach(header => {
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

/* --------------------------------------------------------------------------
   6. BUTTON ACTIONS
   -------------------------------------------------------------------------- */

function handleButtonClick(e) {
    const button = e.currentTarget;
    const action = button.dataset.action;
    const link = button.dataset.link;

    const actions = {
        'open-link': () => openLink(link),
        'bio-modal': () => openBiografiaModal(),
        'pix-modal': () => openPixModal(),
        'qrcode-modal': () => openQRCodeModal(),
        'wifi-modal': () => openWiFiModal(),
    };

    if (actions[action]) actions[action]();
}

function openLink(url) {
    if (!url) {
        showToast('Link não configurado', 'error');
        return;
    }
    trackEvent('link_click', { url });
    window.open(url, '_blank', 'noopener,noreferrer');
}

/* --------------------------------------------------------------------------
   7. SERVICES & CATALOG
   -------------------------------------------------------------------------- */

function renderServices() {
    const list = DOM.servicesList;
    const header = document.getElementById('servicesHeader');
    const body = document.getElementById('servicesBody');
    const arrow = document.getElementById('servicesArrow');
    if (!list || !header || !body) return;

    SERVICES.forEach(service => {
        const cat = document.createElement('div');
        cat.className = 'service-category';
        cat.innerHTML = `
            <h3 class="service-category-title">
                <i class="${service.icon}"></i> ${service.title}
            </h3>
            <ul class="service-category-items">
                ${service.items.map(item => `
                    <li>
                        <span class="service-item-text">${item}</span>
                        <a class="service-quote-btn" href="https://wa.me/5521988593392?text=${encodeURIComponent('Olá! Gostaria de um orçamento para: ' + item)}" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-whatsapp"></i> Solicite um orçamento
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        list.appendChild(cat);
    });

    header.addEventListener('click', () => {
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
        const isOpen = body.classList.contains('open');
        header.setAttribute('aria-expanded', isOpen);
    });
}

function bindVideoControls(vc, mediaList = CATALOG_MEDIA) {
    const video = vc.querySelector('video');
    const playBtn = vc.querySelector('.video-play-btn');
    const stopBtn = vc.querySelector('.video-stop-btn');
    const volumeSlider = vc.querySelector('.video-volume');
    const volumeIcon = vc.querySelector('.video-volume-icon');
    if (!video || !playBtn || !stopBtn || !volumeSlider || !volumeIcon) return;

    const expandBtn = vc.querySelector('.video-expand-btn');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            const src = video.getAttribute('src');
            if (src) openMediaViewer('video', src, mediaList, video.currentTime);
        });
    }

    function updateVolumeIcon() {
        if (video.muted || video.volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute video-volume-icon';
        } else if (video.volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down video-volume-icon';
        } else {
            volumeIcon.className = 'fas fa-volume-up video-volume-icon';
        }
    }

    playBtn.addEventListener('click', () => {
        const silentAuto = video.muted && !video._userMuted;
        if (video.paused) {
            if (silentAuto) {
                video.muted = false;
                updateVolumeIcon();
            }
            video.play().catch(() => {});
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else if (silentAuto) {
            video.muted = false;
            updateVolumeIcon();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value;
        video.muted = false;
        if (video.volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute video-volume-icon';
        } else if (video.volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down video-volume-icon';
        } else {
            volumeIcon.className = 'fas fa-volume-up video-volume-icon';
        }
    });

    volumeIcon.addEventListener('click', () => {
        video.muted = !video.muted;
        video._userMuted = video.muted;
        if (video.muted) {
            volumeIcon.className = 'fas fa-volume-mute video-volume-icon';
            volumeSlider.value = 0;
        } else {
            volumeIcon.className = 'fas fa-volume-up video-volume-icon';
            volumeSlider.value = video.volume;
        }
    });

    video.addEventListener('ended', () => {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function renderCatalog() {
    const track = document.getElementById('catalogTrack');
    const dotsContainer = document.getElementById('catalogDots');
    const header = document.getElementById('catalogHeader');
    const body = document.getElementById('catalogBody');
    const arrow = document.getElementById('catalogArrow');
    if (!track || !header || !body) return;

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    CATALOG_MEDIA.forEach((media, index) => {
        const slide = document.createElement('div');
        slide.className = 'catalog-slide';
        slide.style.cursor = 'pointer';

        if (media.type === 'video') {
            slide.innerHTML = `
                <div class="video-container">
                    <video src="${media.src}" playsinline preload="metadata"></video>
                    <div class="video-controls">
                        <button class="video-btn video-play-btn" title="Play/Pause"><i class="fas fa-play"></i></button>
                        <button class="video-btn video-stop-btn" title="Parar"><i class="fas fa-stop"></i></button>
                        <div class="video-volume-group">
                            <i class="fas fa-volume-up video-volume-icon"></i>
                            <input type="range" class="video-volume" min="0" max="1" step="0.05" value="1">
                        </div>
                        <button class="video-btn video-expand-btn" title="Tela cheia"><i class="fas fa-expand" aria-hidden="true"></i></button>
                    </div>
                </div>`;
        } else {
            slide.innerHTML = `<img src="${media.src}" alt="Serviço ${index + 1}" loading="lazy">`;
        }

        slide.addEventListener('click', (e) => {
            if (e.target.closest('.video-controls')) return;
            const tv = slide.querySelector('video');
            openMediaViewer(media.type, media.src, CATALOG_MEDIA, tv ? tv.currentTime : 0);
        });

        const slideVideo = slide.querySelector('video');
        if (slideVideo) {
            slideVideo.addEventListener('ended', () => {
                if (currentIndex >= CATALOG_MEDIA.length - 1) return;
                goToSlide(currentIndex + 1, true);
            });
        }

        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = 'catalog-dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    track.querySelectorAll('.video-container').forEach(bindVideoControls);

    const counter = document.createElement('div');
    counter.className = 'catalog-counter';
    counter.textContent = `1 / ${CATALOG_MEDIA.length}`;
    dotsContainer.after(counter);

    function goToSlide(index, autoplay = false) {
        const slides = track.querySelectorAll('.catalog-slide');
        const dots = dotsContainer.querySelectorAll('.catalog-dot');

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        pauseAllVideos();
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;

        if (autoplay) playActiveVideo();
    }

    function playActiveVideo() {
        const slide = track.querySelectorAll('.catalog-slide')[currentIndex];
        if (!slide) return;
        const video = slide.querySelector('video');
        if (!video) return;
        video.play().catch(() => {});
        const btn = slide.querySelector('.video-play-btn');
        if (btn) btn.innerHTML = '<i class="fas fa-pause"></i>';
    }

    function pauseAllVideos() {
        track.querySelectorAll('.video-container').forEach(vc => {
            const v = vc.querySelector('video');
            const btn = vc.querySelector('.video-play-btn');
            if (!v || (v.paused && v.currentTime === 0)) return;
            v.pause();
            v.currentTime = 0;
            if (btn) btn.innerHTML = '<i class="fas fa-play"></i>';
        });
    }

    function onDragStart(e) {
        if (e.target.closest('.video-controls')) return;
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentX - startX;
        const offset = -(currentIndex * 100) + (diff / track.offsetWidth * 100);
        track.style.transform = `translateX(${offset}%)`;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2;

        if (diff < -threshold) {
            goToSlide(currentIndex + 1);
        } else if (diff > threshold) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex);
        }
    }

    track.addEventListener('mousedown', onDragStart);
    track.addEventListener('mousemove', onDragMove);
    track.addEventListener('mouseup', onDragEnd);
    track.addEventListener('mouseleave', onDragEnd);

    track.addEventListener('touchstart', onDragStart, { passive: true });
    track.addEventListener('touchmove', onDragMove, { passive: false });
    track.addEventListener('touchend', onDragEnd);

    const prevBtn = document.getElementById('catalogPrev');
    const nextBtn = document.getElementById('catalogNext');

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    goToSlide(0);

    header.addEventListener('click', () => {
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
        const isOpen = body.classList.contains('open');
        header.setAttribute('aria-expanded', isOpen);
    });
}

function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialsDots');
    const header = document.getElementById('testimonialsHeader');
    const body = document.getElementById('testimonialsBody');
    const arrow = document.getElementById('testimonialsArrow');
    if (!track || !header || !body) return;

    const media = TESTIMONIALS_MEDIA;

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    media.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'catalog-slide';

        if (item.type === 'video') {
            slide.innerHTML = `
                <div class="video-container">
                    <video src="${item.src}" muted playsinline preload="metadata"${index === media.length - 1 ? ' loop' : ''}></video>
                    <div class="video-controls">
                        <button class="video-btn video-play-btn" title="Play/Pause"><i class="fas fa-play"></i></button>
                        <button class="video-btn video-stop-btn" title="Parar"><i class="fas fa-stop"></i></button>
                        <div class="video-volume-group">
                            <i class="fas fa-volume-mute video-volume-icon"></i>
                            <input type="range" class="video-volume" min="0" max="1" step="0.05" value="1">
                        </div>
                        <button class="video-btn video-expand-btn" title="Tela cheia"><i class="fas fa-expand" aria-hidden="true"></i></button>
                    </div>
                </div>`;
        } else {
            slide.innerHTML = `<img src="${item.src}" alt="Depoimento ${index + 1}" loading="lazy">`;
        }

        slide.addEventListener('click', (e) => {
            if (e.target.closest('.video-controls')) return;
            const tv = slide.querySelector('video');
            openMediaViewer(item.type, item.src, TESTIMONIALS_MEDIA, tv ? tv.currentTime : 0);
        });

        track.appendChild(slide);

        const slideVideo = slide.querySelector('video');
        if (slideVideo && index < media.length - 1) {
            slideVideo.addEventListener('ended', () => {
                if (currentIndex !== index) return;
                goToSlide(index + 1);
                playSlideVideo(index + 1);
            });
        }

        const dot = document.createElement('div');
        dot.className = 'catalog-dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const counter = document.createElement('div');
    counter.className = 'catalog-counter';
    counter.textContent = `1 / ${media.length}`;
    dotsContainer.after(counter);

    function goToSlide(index) {
        const slides = track.querySelectorAll('.catalog-slide');
        const dots = dotsContainer.querySelectorAll('.catalog-dot');

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        pauseAllVideos();
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }

    function playSlideVideo(index) {
        const slides = track.querySelectorAll('.catalog-slide');
        const v = slides[index] ? slides[index].querySelector('video') : null;
        if (!v) return;
        v.currentTime = 0;
        const btn = slides[index].querySelector('.video-play-btn');
        v.play().then(() => {
            if (btn) btn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(() => {});
    }

    function pauseAllVideos() {
        track.querySelectorAll('video').forEach(v => {
            if (v.paused && v.currentTime === 0) return;
            v.pause();
            v.currentTime = 0;
        });
    }

    function onDragStart(e) {
        if (e.target.closest('.video-controls')) return;
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        track.classList.add('dragging');
    }

    function onDragMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        const diff = currentX - startX;
        const offset = -(currentIndex * 100) + (diff / track.offsetWidth * 100);
        track.style.transform = `translateX(${offset}%)`;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2;

        if (diff < -threshold) {
            goToSlide(currentIndex + 1);
        } else if (diff > threshold) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(currentIndex);
        }
    }

    track.addEventListener('mousedown', onDragStart);
    track.addEventListener('mousemove', onDragMove);
    track.addEventListener('mouseup', onDragEnd);
    track.addEventListener('mouseleave', onDragEnd);

    track.addEventListener('touchstart', onDragStart, { passive: true });
    track.addEventListener('touchmove', onDragMove, { passive: false });
    track.addEventListener('touchend', onDragEnd);

    const prevBtn = document.getElementById('testimonialsPrev');
    const nextBtn = document.getElementById('testimonialsNext');

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    goToSlide(0);

    track.querySelectorAll('.video-container').forEach(vc => bindVideoControls(vc, TESTIMONIALS_MEDIA));

    header.addEventListener('click', () => {
        body.classList.toggle('open');
        arrow.classList.toggle('rotated');
        const isOpen = body.classList.contains('open');
        header.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
            const slides = track.querySelectorAll('.catalog-slide');
            const v = slides[currentIndex] ? slides[currentIndex].querySelector('video') : null;
            if (v && v.muted && !v._userMuted) {
                v.muted = false;
                const container = v.closest('.video-container');
                const icon = container ? container.querySelector('.video-volume-icon') : null;
                if (icon) icon.className = 'fas fa-volume-up video-volume-icon';
            }
        }
    });
}

/* --------------------------------------------------------------------------
   8. CLIPBOARD
   -------------------------------------------------------------------------- */

function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).then(() => {
            showSuccessMessage(successMsg);
            return true;
        }).catch(() => fallbackCopy(text, successMsg));
    }
    return Promise.resolve(fallbackCopy(text, successMsg));
}

function fallbackCopy(text, successMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        if (successMsg) showSuccessMessage(successMsg);
        return true;
    } catch {
        showToast('Erro ao copiar', 'error');
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

function copyPixKey() {
    copyToClipboard(CONFIG.pixKey, 'Chave Pix copiada!').then(() => {
        updateButtonLabel(DOM.copyPixBtn, 'Copiado!', '<i class="fas fa-copy"></i> Copiar');
        trackEvent('pix_key_copied', {});
    });
}

function copyWifiPassword() {
    copyToClipboard(CONFIG.wifiPassword, 'Senha copiada!').then(() => {
        updateButtonLabel(DOM.copyWifiBtn, 'Copiado!', '<i class="fas fa-copy"></i> Copiar');
    });
}

function updateButtonLabel(btn, tempText, restoreHTML) {
    if (!btn) return;
    btn.innerHTML = `<i class="fas fa-check"></i> ${tempText}`;
    setTimeout(() => { btn.innerHTML = restoreHTML; }, 2000);
}

/* --------------------------------------------------------------------------
   9. MODALS
   -------------------------------------------------------------------------- */

let viewerList = null;
let viewerIndex = -1;
let viewerStartAt = 0;

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    document.body.classList.remove('viewer-open');
    const viewer = document.getElementById('mediaViewerContent');
    if (viewer) {
        viewer.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
        viewer.innerHTML = '';
    }
    viewerList = null;
    viewerIndex = -1;
    viewerStartAt = 0;
    updateViewerNav();
}

function updateViewerNav() {
    const prev = document.getElementById('mediaViewerPrev');
    const next = document.getElementById('mediaViewerNext');
    if (!prev || !next) return;
    const active = Array.isArray(viewerList) && viewerIndex >= 0;
    prev.classList.toggle('hidden', !active || viewerIndex <= 0);
    next.classList.toggle('hidden', !active || viewerIndex >= viewerList.length - 1);
}

function showViewerAt(index) {
    if (!Array.isArray(viewerList) || index < 0 || index >= viewerList.length) return;
    const content = document.getElementById('mediaViewerContent');
    if (!content) return;

    viewerIndex = index;
    const item = viewerList[index];

    if (item.type === 'video') {
        let video = content.querySelector('video');
        if (!video) {
            content.innerHTML = `
                <video src="${item.src}" controls playsinline preload="auto"></video>
                <div class="media-viewer-counter"></div>`;
            video = content.querySelector('video');
            if (video) {
                video.addEventListener('ended', () => showViewerAt(viewerIndex + 1));

                const start = viewerStartAt;
                viewerStartAt = 0;
                if (start > 0) {
                    const applyStart = () => {
                        const max = isFinite(video.duration) && video.duration > 0 ? video.duration - 0.1 : start;
                        try { video.currentTime = Math.min(start, Math.max(0, max)); } catch (e) {}
                    };
                    if (video.readyState >= 1) applyStart();
                    else video.addEventListener('loadedmetadata', applyStart, { once: true });
                }
            }
        } else {
            video.src = item.src;
        }
        const counter = content.querySelector('.media-viewer-counter');
        if (counter) {
            counter.style.display = viewerList.length > 1 ? '' : 'none';
            counter.textContent = `${index + 1} / ${viewerList.length}`;
        }
        if (video) video.play().catch(() => {});
    } else {
        content.innerHTML = `<img src="${item.src}" alt="Mídia em tela cheia">`;
    }

    updateViewerNav();
}

function openMediaViewer(type, src, mediaList = CATALOG_MEDIA, startAt = 0) {
    const modal = document.getElementById('mediaViewerModal');
    const content = document.getElementById('mediaViewerContent');
    const closeBtn = document.getElementById('mediaViewerClose');
    if (!modal || !content) return;

    closeAllModals();
    modal.classList.add('active');
    document.body.classList.add('viewer-open');

    if (type === 'video') {
        viewerList = (Array.isArray(mediaList) && mediaList.length) ? mediaList : [{ type, src }];
        viewerIndex = viewerList.findIndex(m => m.src === src);
        if (viewerIndex < 0) {
            viewerList = [{ type, src }];
            viewerIndex = 0;
        }
        viewerStartAt = startAt > 0 ? startAt : 0;
        showViewerAt(viewerIndex);
    } else {
        content.innerHTML = `<img src="${src}" alt="Mídia em tela cheia">`;
        updateViewerNav();
    }

    document.querySelectorAll('video').forEach(v => {
        if (content.contains(v)) return;
        if (v.paused && v.currentTime === 0) return;
        v.pause();
        const container = v.closest('.video-container');
        const btn = container ? container.querySelector('.video-play-btn') : null;
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i>';
    });

    if (closeBtn) closeBtn.focus();
}

function scrollToTop() {
    if (window.innerWidth < 768) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function openPixModal() {
    closeAllModals();
    DOM.pixModal.classList.add('active');
    scrollToTop();
    const closeBtn = DOM.pixModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
}

function openQRCodeModal() {
    closeAllModals();
    DOM.qrcodeModal.classList.add('active');
    generateQRCode();
    scrollToTop();
    const closeBtn = DOM.qrcodeModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
}

function openWiFiModal() {
    closeAllModals();
    DOM.wifiModal.classList.add('active');
    scrollToTop();
    const closeBtn = DOM.wifiModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
}

function openBiografiaModal() {
    if (!DOM.bioModal) return;
    closeAllModals();
    DOM.bioModal.classList.add('active');
    scrollToTop();
    const closeBtn = DOM.bioModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
}

function openBankModal() {
    closeAllModals();
    DOM.bankModal.classList.add('active');
    DOM.bankLoading.style.display = 'flex';
    DOM.bankGrid.style.display = 'none';
    scrollToTop();
    const closeBtn = DOM.bankModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();

    setTimeout(() => {
        DOM.bankLoading.style.display = 'none';
        DOM.bankGrid.style.display = 'block';
        renderBankGrid();
    }, 1500);
}

/* --------------------------------------------------------------------------
   10. QR CODE
   -------------------------------------------------------------------------- */

function generateQRCode() {
    const container = document.getElementById('pageQRCode');
    container.innerHTML = '';
    const url = CONFIG.pageUrl || window.location.href;

    try {
        new QRCode(container, {
            text: url,
            width: 200,
            height: 200,
            colorDark: '#0a2463',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });
    } catch {
        container.innerHTML = '<p style="color:#d32f2f">Erro ao gerar QR Code</p>';
    }
}

function downloadQRCode() {
    const canvas = document.querySelector('#pageQRCode canvas');
    if (!canvas) {
        showToast('QR Code não gerado', 'error');
        return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'studio-sidlaine-thomaz-qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showSuccessMessage('QR Code baixado!');
    trackEvent('qrcode_downloaded', {});
}

/* --------------------------------------------------------------------------
   11. WIFI
   -------------------------------------------------------------------------- */

function openWifiSettings() {
    copyWifiPassword();
    trackEvent('wifi_connect_clicked', {});

    const { isAndroid, isIOS } = detectPlatform();

    if (isAndroid) {
        window.location.href = 'intent://wifi#Intent;action=android.settings.WIFI_SETTINGS;end';
    } else if (isIOS) {
        showToast('Abrindo Ajustes... Selecione "Wi-Fi" na lista.', 'info');
        window.location.href = 'app-settings:';
    } else {
        showToast('Configuração de Wi-Fi disponível apenas em dispositivos móveis.', 'info');
    }
}

/* --------------------------------------------------------------------------
   12. BANK SELECTOR
   -------------------------------------------------------------------------- */

function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    return {
        isAndroid: /android/.test(ua),
        isIOS: /iphone|ipad|ipod/.test(ua),
    };
}

function isInAppBrowser() {
    return /FBAN|FBAV|Instagram|WhatsApp|Line\/|MicroMessenger|Twitter|; wv\)/i.test(navigator.userAgent);
}

function renderBankGrid() {
    DOM.bankGridList.innerHTML = '';
    const { isAndroid, isIOS } = detectPlatform();
    const isMobile = isAndroid || isIOS;

    updateBankNotice(isMobile);

    BANKS.forEach(bank => {
        const item = document.createElement('div');
        item.className = 'bank-item';
        item.innerHTML = `
            <div class="bank-icon" style="background:${bank.color}">
                <img src="https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128"
                     alt="${bank.name}" class="bank-logo-img"
                     onload="this.parentElement.style.background='transparent';this.parentElement.style.boxShadow='none';this.nextElementSibling.style.display='none'"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                <span class="bank-initials">${bank.initials}</span>
            </div>
            <div class="bank-name">${bank.name}</div>
        `;
        item.addEventListener('click', () => handleBankRedirect(bank));
        DOM.bankGridList.appendChild(item);
    });
}

function updateBankNotice(isMobile) {
    if (isMobile) {
        DOM.bankNotice.innerHTML = '<i class="fas fa-info-circle"></i> Toque em um banco para abrir o app. A chave Pix será copiada automaticamente.';
        DOM.bankNotice.style.cssText = 'background:rgba(33,194,94,0.15);color:#21c25e;border-color:rgba(33,194,94,0.3)';
    } else {
        DOM.bankNotice.innerHTML = '<i class="fas fa-info-circle"></i> No celular, o app abre direto. Aqui você vai para a loja do aplicativo.';
        DOM.bankNotice.style.cssText = 'background:rgba(255,193,7,0.15);color:#ffc107;border-color:rgba(255,193,7,0.3)';
    }
}

function handleBankRedirect(bank) {
    trackEvent('bank_redirect_attempt', { bankName: bank.name });
    const { isAndroid, isIOS } = detectPlatform();

    copyPixKeySilent();
    showToast(`Chave Pix copiada! Abrindo ${bank.name}...`, 'success');
    setTimeout(closeAllModals, 300);

    if (isAndroid) {
        if (isInAppBrowser()) {
            openWithSchemeFallback(bank.scheme, bank.playStore, bank.name, 'playstore');
        } else {
            triggerIntent(buildBankIntent(bank));
        }
    } else if (isIOS) {
        openWithSchemeFallback(bank.scheme, bank.appStore, bank.name, 'appstore');
    } else {
        window.location.href = bank.playStore;
    }
}

function buildBankIntent(bank) {
    const pkgMatch = bank.playStore.match(/[?&]id=([^&]+)/);
    const pkg = pkgMatch ? pkgMatch[1] : '';
    const fallback = encodeURIComponent(bank.playStore);

    if (bank.appLink) {
        return `intent://${bank.domain}/#Intent;action=android.intent.action.VIEW;scheme=https;package=${pkg};S.browser_fallback_url=${fallback};end`;
    }

    const scheme = bank.scheme.replace(/^([a-z0-9]+):\/\/$/i, '$1');
    return `intent://open#Intent;scheme=${scheme};package=${pkg};S.browser_fallback_url=${fallback};end`;
}

function triggerIntent(url) {
    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function openWithSchemeFallback(scheme, storeUrl, bankName, storeType) {
    let appOpened = false;

    function handleAppOpened() {
        appOpened = true;
        cleanup();
    }

    function handleVisibility() {
        if (document.visibilityState === 'hidden') handleAppOpened();
    }

    function cleanup() {
        window.removeEventListener('blur', handleAppOpened);
        document.removeEventListener('visibilitychange', handleVisibility);
    }

    window.addEventListener('blur', handleAppOpened);
    document.addEventListener('visibilitychange', handleVisibility);

    window.location.href = scheme;

    setTimeout(() => {
        cleanup();
        if (appOpened || document.visibilityState !== 'visible') return;
        trackEvent('bank_fallback_used', { bankName, storeType });
        showToast('App não instalado — abrindo a loja...', 'info');
        window.location.href = storeUrl;
    }, 2000);
}

function copyPixKeySilent() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONFIG.pixKey).catch(() => {});
    } else {
        fallbackCopy(CONFIG.pixKey, null);
    }
}

/* --------------------------------------------------------------------------
   13. THEME
   -------------------------------------------------------------------------- */

function initTheme() {
    const btn = DOM.themeToggle;
    if (!btn) return;

    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');

    const savedContrast = localStorage.getItem('highContrast') === 'true';
    if (savedContrast) {
        document.body.classList.add('high-contrast');
        const contrastBtn = DOM.contrastToggle;
        if (contrastBtn) {
            contrastBtn.classList.add('active-contrast');
            contrastBtn.setAttribute('aria-label', 'Desativar alto contraste');
        }
    }

    btn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const btn = DOM.themeToggle;
    const isDark = document.body.classList.contains('dark-theme');

    document.body.classList.toggle('dark-theme', !isDark);
    document.body.classList.toggle('light-theme', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    trackEvent('theme_changed', { theme: isDark ? 'light' : 'dark' });
}

function toggleContrast() {
    const btn = DOM.contrastToggle;
    const isActive = document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', isActive);
    if (btn) {
        btn.classList.toggle('active-contrast', isActive);
        btn.setAttribute('aria-label', isActive ? 'Desativar alto contraste' : 'Ativar alto contraste');
    }
    trackEvent('contrast_changed', { highContrast: isActive });
}

/* --------------------------------------------------------------------------
   14. NOTIFICATIONS
   -------------------------------------------------------------------------- */

function showSuccessMessage(text) {
    DOM.successText.textContent = text;
    DOM.successMessage.classList.add('show');
    setTimeout(() => DOM.successMessage.classList.remove('show'), 3000);
}

function showToast(message, type = 'info') {
    DOM.toast.textContent = message;
    DOM.toast.className = `toast show ${type}`;
    setTimeout(() => DOM.toast.classList.remove('show'), 3000);
}

/* --------------------------------------------------------------------------
   15. ANALYTICS
   -------------------------------------------------------------------------- */

function trackEvent(eventName, eventData = {}) {
    console.log('Event:', eventName, eventData);

    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }

    const events = JSON.parse(localStorage.getItem('pageEvents') || '[]');
    events.push({ name: eventName, data: eventData, timestamp: new Date().toISOString() });

    if (events.length > 50) events.shift();
    localStorage.setItem('pageEvents', JSON.stringify(events));
}

function detectAccessMethod() {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');

    if (source === 'nfc' || source === 'qrcode') {
        trackEvent('page_access', { method: source });
    }
}

/* --------------------------------------------------------------------------
   16. LOGO ANIMATION
   -------------------------------------------------------------------------- */

function initLogoAnimation() {
    const logo = document.querySelector('.logo');
    if (!logo) return;

    logo.addEventListener('animationend', (e) => {
        if (e.animationName === 'logoEntrance') {
            logo.classList.add('loaded');
        }
    });
}

/* --------------------------------------------------------------------------
   17. EXPORTS (for external access if needed)
   -------------------------------------------------------------------------- */

window.copyPixKey = copyPixKey;
window.downloadQRCode = downloadQRCode;
window.trackEvent = trackEvent;
window.getAnalytics = () => JSON.parse(localStorage.getItem('pageEvents') || '[]');

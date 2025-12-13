document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONFIGURAÇÃO MANUAL DE VÍDEOS (CORRIGIDA) ---
    // ATENÇÃO: Adicione aqui o URL e o TÍTULO do vídeo.
    const youtubeVideos = [
        { 
            url: "https://www.youtube.com/watch?v=I17Zm_qWrrM", 
            title: "Se não arriscares, nunca vais saber" 
        },
        { 
            url: "https://www.youtube.com/watch?v=kZ1rezXNZrg", 
            title: "Como Criar Fotos para Fashion Com IA - Dropshipping" 
        },
        { 
            url: "https://www.youtube.com/watch?v=sLcMLVsNsh8", 
            title: "A verdade sobre produtividade e motivação" 
        }
    ];

    const videoGrid = document.getElementById('video-grid');
    
    const getYouTubeId = (url) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&\n?#]+)/;
        const match = url.match(regex);
        return (match && match[1]) ? match[1] : null;
    };

    const loadManualVideos = () => {
        if (!youtubeVideos.length) {
            videoGrid.innerHTML = '<p class="text-center" style="color:var(--text-color-muted);">Nenhum URL de vídeo foi configurado no script.js.</p>';
            return;
        }

        videoGrid.innerHTML = '';

        youtubeVideos.forEach((video, index) => {
            const videoId = getYouTubeId(video.url);
            
            if (videoId) {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                
                const videoElement = `
                    <div class="video-item">
                        <a href="${video.url}" target="_blank" aria-label="Ver vídeo: ${video.title}">
                            <img src="${thumbnailUrl}" alt="${video.title}">
                            <h4>${video.title}</h4> 
                        </a>
                    </div>
                `;
                videoGrid.innerHTML += videoElement;
            }
        });
    };
    loadManualVideos();


    // --- 2. FUNCIONALIDADE DO MENU HAMBURGUER (Restante do código) ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');

    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
    });

    // Fechar o menu ao clicar num link (para mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
            }
        });
    });


    // --- 3. SCROLL E EFEITO HEADER ---
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Loading Screen
    const loadingOverlay = document.getElementById('loading-overlay');
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 1200);

});

const services = {
    residential:{icon:'🏠',badge:'Local Service Area',title:'Residential <em>Electrician</em>',subtitle:'Expert electrical repairs and services for homeowners — panel upgrades, service calls, interior remodels, and full home wiring in Vienna, Illinois and surrounding areas within 100 miles.',email:'placeholder@mysite.com',galleryLabel:'Residential Project Photos',galleryHint:'Before and After examples of our residential craftsmanship.',gallerySlots:[{icon:'🏠',label:'Panel Upgrade — Before & After'},{icon:'🔌',label:'Remodel Rewire — Before & After'},{icon:'💡',label:'Kitchen Lighting — Before & After'},{icon:'⚡',label:'Main Service — Before & After'},{icon:'🔧',label:'Troubleshooting — Before & After'},{icon:'🏠',label:'Home Wiring — Before & After'}],services:[{name:'Service Calls & Troubleshooting',desc:'Fast diagnosis and repair of electrical faults, tripped breakers, dead outlets, and any residential electrical issue.'},{name:'Panel Upgrades',desc:'Replace outdated or undersized electrical panels to meet modern power demands and safety standards.'},{name:'Interior Remodel Wiring',desc:'Full electrical rough-in and finish work for kitchen, bath, basement, and whole-home remodels.'},{name:'Outlet & Switch Installation',desc:'Add, move, or replace outlets and switches — including GFCI, USB, and smart home devices.'},{name:'Ceiling Fan & Fixture Installation',desc:'Safe installation of ceiling fans, light fixtures, chandeliers, and recessed lighting throughout your home.'},{name:'Home Safety Inspections',desc:'Comprehensive electrical inspections to identify code violations, hazards, and upgrade opportunities.'}]},
    commercial:{icon:'🏗️',badge:'Nationwide Service',title:'Commercial <em>Electrician</em>',subtitle:'Comprehensive electrical services for businesses of all sizes — from small tenant build-outs to large new construction. Available nationwide for any commercial scope.',email:'placeholder@mysite.com',galleryLabel:'Commercial Project Photos',galleryHint:'Before and After examples of our commercial installations.',gallerySlots:[{icon:'🏗️',label:'Office Build-out — Before & After'},{icon:'💡',label:'LED Retrofit — Before & After'},{icon:'⚡',label:'Switchgear — Before & After'},{icon:'🔌',label:'Data Power — Before & After'},{icon:'🏬',label:'Retail Wiring — Before & After'},{icon:'🔧',label:'Exterior Lighting — Before & After'}],services:[{name:'New Construction Electrical',desc:'Full electrical design and installation for new commercial buildings, working alongside your general contractor.'},{name:'Tenant Build-Outs',desc:'Complete electrical fit-out for retail, office, restaurant, and mixed-use tenant spaces.'},{name:'Commercial Panel Upgrades',desc:'Upgrade service entrances and distribution panels to meet growing power requirements.'},{name:'Parking Lot & Exterior Lighting',desc:'LED parking lot lighting, wall packs, and exterior security lighting installation.'},{name:'Data & Low Voltage',desc:'Structured cabling, data drops, and low-voltage wiring for commercial offices and facilities.'},{name:'Emergency & Exit Lighting',desc:'Code-compliant emergency lighting and exit sign installation and maintenance.'}]},
    industrial:{icon:'🏭',badge:'Nationwide Service',title:'Industrial <em>Electrical</em>',subtitle:'Heavy-duty electrical solutions for manufacturing, warehousing, and industrial facilities. We understand the demands of complex industrial environments.',email:'placeholder@mysite.com',galleryLabel:'Industrial Project Photos',galleryHint:'Before and After examples of our industrial facility work.',gallerySlots:[{icon:'🏭',label:'3-Phase Panel — Before & After'},{icon:'⚙️',label:'Machine Power — Before & After'},{icon:'🔌',label:'Warehouse Light — Before & After'},{icon:'⚡',label:'MCC Install — Before & After'},{icon:'🔧',label:'Conduit Run — Before & After'},{icon:'🏭',label:'Infrastructure — Before & After'}],services:[{name:'Three-Phase Power Installation',desc:'Design and installation of three-phase electrical systems for heavy industrial equipment and machinery.'},{name:'Machine & Equipment Connections',desc:'Safe, code-compliant electrical connections for CNC machines, conveyors, presses, and all industrial equipment.'},{name:'Motor Control Centers (MCC)',desc:'Installation and maintenance of motor control centers and variable frequency drives (VFDs).'},{name:'Industrial Lighting',desc:'High-bay LED lighting installation and retrofits for warehouses, manufacturing floors, and loading docks.'},{name:'Facility Electrical Maintenance',desc:'Preventive maintenance programs, thermographic scanning, and emergency repair for industrial facilities.'},{name:'Power Distribution',desc:'Design and installation of electrical distribution systems, bus ducts, and substation equipment.'}]},
    marine:{icon:'⛵',badge:'Nationwide Service',title:'Marine <em>Electrical Work</em>',subtitle:'Specialized electrical systems for boats, docks, and marinas. Safety-first engineering designed for saltwater, moisture, and demanding marine environments.',email:'placeholder@mysite.com',galleryLabel:'Marine Project Photos',galleryHint:'Before and After examples of our marine-grade solutions.',gallerySlots:[{icon:'⛵',label:'Vessel Rewire — Before & After'},{icon:'🚢',label:'Shore Power — Before & After'},{icon:'🔌',label:'Dock Pedestal — Before & After'},{icon:'💡',label:'Dock Lighting — Before & After'},{icon:'🔧',label:'Nav Lighting — Before & After'},{icon:'⛵',label:'Power System — Before & After'}],services:[{name:'Shore Power & Dock Wiring',desc:'Installation and upgrade of shore power systems, dock power pedestals, and marina electrical infrastructure.'},{name:'Boat Electrical Rewiring',desc:'Complete rewiring of vessels using marine-grade materials that resist corrosion, moisture, and vibration.'},{name:'Navigation & Safety Lighting',desc:'Installation of navigation lights and running lights to meet USCG and ABYC standards.'},{name:'Battery & Inverter Systems',desc:'Marine battery banks, inverter/charger systems, and DC power distribution for all vessel types.'},{name:'Underwater Dock Lighting',desc:'Submersible LED dock lighting systems for aesthetics, safety, and fish attraction.'},{name:'Marina Electrical Inspections',desc:'Safety inspections for marina electrical systems including stray current testing and GFCI protection.'}]},
    led:{icon:'💡',badge:'Nationwide Service',title:'LED Lighting<br><em>& Retrofits</em>',subtitle:'Upgrade to energy-efficient LED lighting across any property type. We handle everything from single fixture swaps to full building-wide retrofits.',email:'placeholder@mysite.com',galleryLabel:'LED Lighting Project Photos',galleryHint:'Before and After shots from residential, commercial, and industrial LED retrofits.',gallerySlots:[{icon:'💡',label:'Office Retrofit — Before & After'},{icon:'🏠',label:'Home Lighting — Before & After'},{icon:'🏭',label:'High-Bay LED — Before & After'},{icon:'🏬',label:'Display Light — Before & After'},{icon:'🌳',label:'Landscape LED — Before & After'},{icon:'💡',label:'Accent Lighting — Before & After'}],services:[{name:'LED Retrofit & Fixture Swap',desc:'Replace fluorescent, incandescent, and HID fixtures with energy-efficient LED — same look, lower bills.'},{name:'Recessed Lighting Installation',desc:'New can lights, wafer lights, and adjustable LED recessed fixtures for any room or space.'},{name:'Commercial LED Upgrade',desc:'Building-wide LED upgrades for offices, retail, restaurants, and commercial facilities.'},{name:'Industrial High-Bay Lighting',desc:'Replace metal halide high-bays with LED in warehouses, factories, and large open spaces.'},{name:'Outdoor & Parking Lot LED',desc:'LED wall packs, pole lights, and parking lot fixtures for security, safety, and curb appeal.'},{name:'Smart & Dimmer Controls',desc:'Pair LED upgrades with smart switches, dimmers, and occupancy sensors for maximum efficiency.'}]},
    generator:{icon:'⚡',badge:'Nationwide Service',title:'Generator<br><em>Services</em>',subtitle:'Never lose power again. We install whole-home and commercial standby generators and keep them running with professional maintenance programs.',email:'placeholder@mysite.com',galleryLabel:'Generator Project Photos',galleryHint:'Before and After examples of our generator installations.',gallerySlots:[{icon:'⚡',label:'Standby Install — Before & After'},{icon:'🔌',label:'Transfer Switch — Before & After'},{icon:'⚙️',label:'Comm Generator — Before & After'},{icon:'🔧',label:'System Service — Before & After'},{icon:'🏭',label:'Backup Power — Before & After'},{icon:'⚡',label:'Load Setup — Before & After'}],services:[{name:'Whole-Home Generator Installation',desc:'Automatic standby generator installation that kicks in within seconds of a power outage.'},{name:'Commercial Generator Systems',desc:'High-capacity generator systems for businesses, ensuring continuity of operations during grid outages.'},{name:'Transfer Switch Installation',desc:'Automatic and manual transfer switches that safely isolate your generator from utility power.'},{name:'Generator Sizing & Load Analysis',desc:'Professional load calculations to recommend the right generator size for your home or facility.'},{name:'Annual Maintenance Programs',desc:'Scheduled maintenance including oil changes, filter replacement, battery checks, and load testing.'},{name:'Emergency Generator Service',desc:'Fast-response service and repair for generators that won\'t start or are performing below spec.'}]}
};

function showHome(){
    document.getElementById('page-home').classList.add('active');
    document.getElementById('page-service').classList.remove('active');
}

function scrollToSection(id){
    setTimeout(() => {
        const el = document.getElementById(id);
        if(el){
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({top:0,behavior:'smooth'});
        }
    }, 10);
}

function showService(key){
    const s=services[key];if(!s)return;
    const badgeClass = s.badge.toLowerCase().includes('local') ? 'local' : 'national';
    document.getElementById('detail-badge').innerHTML=`<span class="badge-pill ${badgeClass}">${s.badge}</span>`;
    document.getElementById('detail-title').innerHTML=s.title;
    document.getElementById('detail-subtitle').textContent=s.subtitle;
    document.getElementById('detail-icon-bg').textContent=s.icon;
    document.getElementById('detail-email-btn').href='mailto:'+s.email;
    document.getElementById('cta-email-link').href='mailto:'+s.email;
    document.getElementById('cta-email-link').textContent=s.email;
    document.getElementById('gallery-title').textContent=s.galleryLabel;
    document.getElementById('gallery-subtitle').textContent=s.galleryHint;
    document.getElementById('gallery-grid').innerHTML=s.gallerySlots.map((slot,i)=>
        `<div class="gallery-slot"><div class="gallery-slot-num">${String(i+1).padStart(2,'0')}</div><div class="gallery-slot-icon">${slot.icon}</div><div class="gallery-slot-label">${slot.label}<br><span style="color:var(--orange);font-size:0.65rem;">— Photo placeholder —</span></div></div>`
    ).join('');
    document.getElementById('detail-service-list').innerHTML=s.services.map(item=>
        `<div class="detail-service-item"><div class="detail-service-bullet"></div><div><div class="detail-service-name">${item.name}</div><div class="detail-service-desc">${item.desc}</div></div></div>`
    ).join('');
    document.getElementById('page-home').classList.remove('active');
    document.getElementById('page-service').classList.add('active');
    window.scrollTo({top:0,behavior:'instant'});
}

function handleSubmit(e){
    e.preventDefault();
    const btn=e.target.querySelector('button[type="submit"]');
    const orig=btn.innerHTML;
    btn.innerHTML='✓ Request Sent — We\'ll be in touch!';
    btn.style.background='var(--blue-mid)';btn.disabled=true;
    setTimeout(()=>{btn.innerHTML=orig;btn.style.background='';btn.disabled=false;e.target.reset();},5000);
}

// --- THEME PANEL ---
function toggleThemePanel(){
    document.getElementById('layout-panel').classList.remove('open');
    document.getElementById('theme-panel').classList.toggle('open');
}

// --- LAYOUT PANEL ---
function toggleLayoutPanel(){
    document.getElementById('theme-panel').classList.remove('open');
    document.getElementById('layout-panel').classList.toggle('open');
}

const LAYOUTS = [
    'modern', 'classic', 'ultra-wide', 'boxed', 'compact-grid', 'rounded',
    'brutalist', 'minimal', 'geometric', 'tech', 'retro', 'gradient-bg',
    'glass', 'no-lines', 'geometric-gradient', 'split-hero', 'asymmetric',
    'magazine', 'parallax', 'cardstack', 'circuit', 'terminal', 'diagonal-sections',
    'floating-cards', 'glass-extra', 'hud', 'lineart', 'horizontal', 'neu',
    'industrial-grid', 'doubleborder', 'skew', 'paper', 'sidebar-right',
    'floating-menu', 'neon-glow', 'sidebar-nav', 'outline-text', 'bento-grid',
    'future-dark', 'soft-ui', 'industrial-thick', 'mosaic'
];

function setLayout(style){
    document.body.classList.remove(...LAYOUTS.map(l => 'layout-' + l));
    if(style && style !== 'modern') document.body.classList.add('layout-' + style);

    LAYOUTS.forEach(l => {
        const el = document.getElementById('layout-' + l);
        const check = document.getElementById('check-' + l);
        const isActive = style === l || (!style && l === 'modern');
        if(el) el.classList.toggle('active', isActive);
        if(check) check.style.opacity = isActive ? '1' : '0';
    });

    document.getElementById('layout-panel').classList.remove('open');
    try{localStorage.setItem('cws-layout', style);}catch(e){}
}

const THEMES = [
    'theme-gold', 'theme-forest', 'theme-arctic', 'theme-crimson',
    'theme-industrial', 'theme-neon', 'theme-desert', 'theme-ocean', 'theme-sunset',
    'theme-slate', 'theme-carbon', 'theme-midnight-pro', 'theme-electric-purple',
    'theme-emerald-isle', 'theme-blueprint', 'theme-high-voltage', 'theme-rust',
    'theme-lava', 'theme-matrix', 'theme-copper', 'theme-nebula', 'theme-nord',
    'theme-solarized', 'theme-forest-night', 'theme-synthwave', 'theme-gold-black',
    'theme-deep-red', 'theme-phantom', 'theme-toxic', 'theme-cyberpunk',
    'theme-desert-night', 'theme-neon-sunset', 'theme-vintage-tech', 'theme-deep-space',
    'theme-industrial-gold', 'theme-rose-quartz', 'theme-glitch', 'theme-stealth',
    'theme-royal-purple', 'theme-monochrome-pro', 'theme-livewire', 'theme-highvoltage',
    'theme-graphite', 'theme-neonpower', 'theme-unlimited', 'theme-oceanic',
    'theme-cyberforest', 'theme-obsidian', 'theme-titanium', 'theme-neonpulse',
    'theme-acidgold', 'theme-carbonblue', 'theme-radioactive', 'theme-ultraviolet',
    'theme-mirage'
];

function setTheme(el, themeClass){
    document.body.classList.remove(...THEMES);
    if(themeClass) document.body.classList.add(themeClass);
    document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
    el.classList.add('active');
    setTimeout(() => document.getElementById('theme-panel').classList.remove('open'), 400);
    try{localStorage.setItem('cws-theme', themeClass);}catch(e){}
}

// Restore saved theme & layout on load
(function(){
    try{
        const s = localStorage.getItem('cws-theme');
        if(s){
            document.body.classList.add(s);
            document.querySelectorAll('.theme-option').forEach(o => {
                const match = o.getAttribute('data-theme') === s;
                const defaultMatch = !s && !o.getAttribute('data-theme');
                o.classList.toggle('active', match || defaultMatch);
            });
        }
        const l = localStorage.getItem('cws-layout') || 'modern';
        setLayout(l);
    }catch(e){}
})();

// Close panels when clicking outside
document.addEventListener('click', function(e){
    if(!e.target.closest('.theme-switcher')){
        document.getElementById('theme-panel').classList.remove('open');
        document.getElementById('layout-panel').classList.remove('open');
    }
});

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if(btn) btn.classList.toggle('visible', window.scrollY > 500);
});

// Scroll-in animation for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.08});

document.querySelectorAll('.service-card,.faq-item,.about-card,.cov-row').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.5s ${i*0.06}s ease, transform 0.5s ${i*0.06}s ease`;
    observer.observe(el);
});

// Lazy-load images with data-src attribute
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    if(!images.length) return;
    const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                obs.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
});

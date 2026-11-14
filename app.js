/* ==========================================================================
   PHILOMEL PUBLIC SCHOOL (Arambagh) - ENTERPRISE SPA ROUTER & LOGIC
   ========================================================================== */

// --- Global Application State ---
const state = {
  currentRoute: 'home',
  targetRoute: 'home',
  theme: 'light',
  language: 'en',
  activeRole: 'student',
  admissionsData: {},
  searchIndex: [],
  mobileMenuOpen: false,
  isTransitioning: false,
  transitionTimer: null
};

// --- Available Local High-Res Images ---
const IMAGES = {
  hero: 'hero.png',
  schoolBuilding: 'school-building.png',
  campus: 'campus.png',
  chairman: 'Chairman.png',
  principal: 'principle.png',
  teachersGroup: 'teachers-group.png',
  classroom1: 'classroom-1.png',
  classroom2: 'classroom-2.png',
  studentLearning: 'student-learning.png',
  sports: 'sports.png',
  happyStudents: 'happy-students.png',
  playground: 'playground.png',
  annualFunction: 'annual-function.png',
  celebration: 'celebration.png',
  artCraft: 'art-craft.png',
  dance: 'dance.png',
  groupPhoto: 'group-photo.png',
  teacherWithStudent: 'teacher-with-student.png',
  logo: 'logo.png'
};

// --- Page Route View Renderers ---
const views = {

  // 1. HOME VIEW
  home: () => `
    <!-- 100vh Full Screen Hero -->
    <section class="hero-section">
      <div class="hero-bg-media">
        <img src="${IMAGES.hero}" alt="Philomel Public School (Arambagh) Campus" class="hero-bg-image">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content animate-fade-up">
        <div class="hero-badge"><i class="fa-solid fa-award"></i> WELCOME TO PHILOMEL PUBLIC SCHOOL (ARAMBAGH)</div>
        <h1 class="hero-title">Inspiring Minds, <span>Building Bright Futures</span></h1>
        <p class="hero-subtitle">Providing holistic education through modern teaching methodologies, advanced labs, comprehensive co-curricular activities, and a safe, nurturing campus.</p>
        
        <div class="hero-ctas">
          <button class="btn-gold" onclick="openAdmissionModal()"><i class="fa-solid fa-paper-plane"></i> Apply Now</button>
          <button class="btn-outline-white" onclick="navigate('academics')"><i class="fa-solid fa-book-open"></i> Explore Academics</button>
        </div>

        <!-- Elegant Premium Highlights Panel (Centered Horizontal Feature Row) -->
        <div class="hero-highlights-panel">
          <!-- CARD 1 -->
          <div class="highlight-card">
            <div class="highlight-icon-wrap">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="highlight-text-content">
              <h3 class="highlight-main-text">TODDLER &rarr; CLASS V</h3>
              <span class="highlight-sub-text">EARLY YEARS TO PRIMARY</span>
            </div>
          </div>

          <!-- CARD 2 -->
          <div class="highlight-card">
            <div class="highlight-icon-wrap">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div class="highlight-text-content">
              <h3 class="highlight-main-text">HOLISTIC LEARNING</h3>
              <span class="highlight-sub-text">ACADEMICS &amp; BEYOND</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Excellence Section -->
    <section class="section-padding">
      <div class="section-container">
        <div class="section-header">
          <span class="section-subtitle"><i class="fa-solid fa-book-bookmark"></i> World-Class Education</span>
          <h2 class="section-title">Academic Wings & Programs</h2>
          <p class="section-description">Customized learning pathways designed for every stage of your child's intellectual, emotional, and social development.</p>
        </div>

        <div class="programs-grid" style="grid-template-columns: repeat(2, 1fr);">
          <!-- Pre-Primary -->
          <div class="program-card">
            <div class="program-img-wrapper">
              <img src="${IMAGES.artCraft}" alt="Pre Primary">
              <span class="program-badge">Ages 3 - 5</span>
            </div>
            <div class="program-body">
              <h3 class="program-title">Pre-Primary (Early Years)</h3>
              <p class="program-text">Montessori & play-way methodologies developing foundational motor skills, creativity, phonics, and curiosity.</p>
              <a href="#pre-primary" onclick="navigate('pre-primary')" class="program-link">Discover Pre-Primary <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- Primary -->
          <div class="program-card">
            <div class="program-img-wrapper">
              <img src="${IMAGES.studentLearning}" alt="Primary School">
              <span class="program-badge">Grades 1 - 5</span>
            </div>
            <div class="program-body">
              <h3 class="program-title">Primary School</h3>
              <p class="program-text">Inquiry-based learning fostering critical thinking, literacy, mathematical fluency, and environmental awareness.</p>
              <a href="#primary" onclick="navigate('primary')" class="program-link">Discover Primary <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Messages Preview -->
    <section class="section-padding section-bg-surface">
      <div class="section-container">
        <div class="section-header">
          <span class="section-subtitle"><i class="fa-solid fa-quote-left"></i> Visionary Leadership</span>
          <h2 class="section-title">Messages from Our Founders</h2>
        </div>

        <div class="leadership-grid">
          <!-- Chairman -->
          <div class="luxury-card leader-card">
            <div class="leader-avatar">
              <img src="${IMAGES.chairman}" alt="Chairman & Founder">
            </div>
            <div>
              <p class="leader-quote">"Education is not merely preparing for life; education is life itself. At Philomel, we sculpt future global innovators who lead with empathy and integrity."</p>
              <h4 class="leader-name">Mrs. Nabanita Chaudhuri</h4>
              <span class="leader-role">Chairman & Founder</span>
            </div>
          </div>

          <!-- Principal -->
          <div class="luxury-card leader-card">
            <div class="leader-avatar">
              <img src="${IMAGES.principal}" alt="Principal">
            </div>
            <div>
              <p class="leader-quote">"We believe every student holds unique brilliance. Our mission is to provide an ecosystem where academic rigour meets joyful self-discovery."</p>
              <h4 class="leader-name">Mr. Joyabrata Goswami</h4>
              <span class="leader-role">Principal & Academic Director</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Features Grid -->
    <section class="section-padding">
      <div class="section-container">
        <div class="section-header">
          <span class="section-subtitle"><i class="fa-solid fa-star"></i> The Philomel Edge</span>
          <h2 class="section-title">Why Parents Trust Philomel</h2>
        </div>

        <div class="features-grid">
          <div class="luxury-card feature-card">
            <div class="feature-icon-box"><i class="fa-solid fa-futbol"></i></div>
            <h3 class="feature-title">Olympic Sports Complex</h3>
            <p style="color:var(--text-muted); font-size:0.92rem;">Temperature-controlled pool, FIFA-grade turf, indoor badminton courts, and professional coaches.</p>
          </div>

          <div class="luxury-card feature-card">
            <div class="feature-icon-box"><i class="fa-solid fa-globe"></i></div>
            <h3 class="feature-title">Global University Prep</h3>
            <p style="color:var(--text-muted); font-size:0.92rem;">Dedicated career guidance counseling yielding placements in Ivy League and top global colleges.</p>
          </div>

          <div class="luxury-card feature-card">
            <div class="feature-icon-box"><i class="fa-solid fa-shield-cat"></i></div>
            <h3 class="feature-title">3-Tier Safety & Transport</h3>
            <p style="color:var(--text-muted); font-size:0.92rem;">GPS-tracked air-conditioned buses, 24/7 CCTV surveillance, and full-time medical doctors.</p>
          </div>

          <div class="luxury-card feature-card">
            <div class="feature-icon-box"><i class="fa-solid fa-chalkboard-user"></i></div>
            <h3 class="feature-title">1:12 Faculty Ratio</h3>
            <p style="color:var(--text-muted); font-size:0.92rem;">Small class sizes ensuring personalized attention, continuous mentoring, and tailored learning.</p>
          </div>

          <div class="luxury-card feature-card">
            <div class="feature-icon-box"><i class="fa-solid fa-palette"></i></div>
            <h3 class="feature-title">Performing Arts Center</h3>
            <p style="color:var(--text-muted); font-size:0.92rem;">Acoustically designed 1,200-seat auditorium for music, theater, classical dance, and fine arts.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 2. ABOUT SCHOOL VIEW
  about: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <span style="color:var(--color-gold); letter-spacing:2px; font-weight:700; text-transform:uppercase; font-size:0.85rem;">About Philomel Public School (Arambagh)</span>
        <h1 style="font-family:var(--font-heading); font-size:3.2rem; margin-top:8px;">Legacy of Educational Excellence</h1>
      </div>
    </div>

    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;">
          <div>
            <h2 class="section-title">A Heritage of Nurturing Future Visionaries</h2>
            <p class="section-description" style="margin-bottom:20px;">
              Founded with the noble mission of delivering holistic, world-class education, Philomel Public School (Arambagh) has grown into one of the region's most respected seats of learning. We blend traditional values with progressive technological advancements.
            </p>
            <p class="section-description">
              Our 25-acre green campus provides a serene, stimulating atmosphere where curiosity thrives and character is forged through sports, arts, academics, and leadership opportunities.
            </p>
          </div>
          <div>
            <img src="${IMAGES.schoolBuilding}" alt="School Infrastructure" style="width:100%; border-radius:var(--radius-lg); border:2px solid var(--border-gold); box-shadow:var(--shadow-lg);">
          </div>
        </div>
      </div>
    </section>
  `,

  // 3. HISTORY VIEW
  history: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <span style="color:var(--color-gold); letter-spacing:2px; font-weight:700; text-transform:uppercase; font-size:0.85rem;">Philomel Public School (Arambagh)</span>
        <h1 style="font-family:var(--font-heading); font-size:3.2rem; margin-top:8px;">Legacy & History</h1>
        <p>Our journey of educational excellence from foundational learning to senior secondary leadership across West Bengal.</p>
      </div>
    </div>

    <section class="section-padding">
      <div class="section-container">
        <div class="timeline-track">
          
          <!-- Milestone 1: 2011 -->
          <div class="timeline-milestone">
            <div class="timeline-node">
              <i class="fa-solid fa-flag"></i>
            </div>
            <div class="timeline-card">
              <div class="timeline-year-tag"><i class="fa-solid fa-calendar-day"></i> 2011</div>
              <h3 class="timeline-title">Foundation Stone Laid</h3>
              <p class="timeline-desc">
                Established with a vision to reimagine early childhood and modern education, starting our journey with a commitment to academic excellence and strong values.
              </p>
            </div>
          </div>

          <!-- Milestone 2: 2017 -->
          <div class="timeline-milestone">
            <div class="timeline-node">
              <i class="fa-solid fa-school-flag"></i>
            </div>
            <div class="timeline-card">
              <div class="timeline-year-tag"><i class="fa-solid fa-calendar-day"></i> 2017</div>
              <h3 class="timeline-title">Higher Secondary Upgradation</h3>
              <p class="timeline-desc">
                Upgraded select campuses to Higher Secondary level, equipping them with advanced academic infrastructure, modern science & computer labs, and comprehensive board preparation.
              </p>
            </div>
          </div>

          <!-- Milestone 3: 2021 -->
          <div class="timeline-milestone">
            <div class="timeline-node">
              <i class="fa-solid fa-map-location-dot"></i>
            </div>
            <div class="timeline-card">
              <div class="timeline-year-tag"><i class="fa-solid fa-calendar-day"></i> 2021</div>
              <h3 class="timeline-title">Rapid Regional Expansion</h3>
              <p class="timeline-desc">
                Expanded our reach across West Bengal, establishing high-quality pre-primary centers alongside our flagship Higher Secondary institutions.
              </p>
            </div>
          </div>

          <!-- Milestone 4: 2026 -->
          <div class="timeline-milestone">
            <div class="timeline-node">
              <i class="fa-solid fa-award"></i>
            </div>
            <div class="timeline-card" style="border-left-color: var(--color-accent); box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);">
              <div class="timeline-year-tag" style="background: linear-gradient(135deg, #D4AF37 0%, #AA820A 100%); color: #04142d;"><i class="fa-solid fa-trophy"></i> 2026 Milestone</div>
              <h3 class="timeline-title" style="color: var(--color-primary-dark);">55+ Branches & Higher Secondary Campuses</h3>
              <p class="timeline-desc">
                Proudly operating 55+ Pre-Primary branches across West Bengal, along with select Higher Secondary campuses, providing a complete educational ecosystem from early foundational learning to senior secondary excellence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,

  // 4. VISION & MISSION VIEW
  vision: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Vision, Mission & Core Values</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px;">
          <div class="luxury-card">
            <i class="fa-solid fa-eye" style="font-size:3rem; color:var(--color-gold); margin-bottom:16px;"></i>
            <h2 style="font-family:var(--font-heading); margin-bottom:16px;">Our Vision</h2>
            <p style="color:var(--text-muted); line-height:1.8;">
              To be a global benchmark in transformative education, empowering students to become compassionate, ethical, and courageous leaders who create positive impact in an ever-changing world.
            </p>
          </div>
          <div class="luxury-card">
            <i class="fa-solid fa-bullseye" style="font-size:3rem; color:var(--color-gold); margin-bottom:16px;"></i>
            <h2 style="font-family:var(--font-heading); margin-bottom:16px;">Our Mission</h2>
            <p style="color:var(--text-muted); line-height:1.8;">
              To provide an inclusive, inspiring learning environment combining intellectual rigor, technological mastery, artistic expression, and athletic achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 5. CHAIRMAN'S MESSAGE VIEW
  chairman: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Chairman's Message & Vision</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:300px 1fr; gap:40px; align-items:start;">
          <img src="${IMAGES.chairman}" alt="Chairman" style="width:100%; border-radius:var(--radius-lg); border:2px solid var(--color-gold);">
          <div class="luxury-card">
            <h2 style="font-family:var(--font-heading); color:var(--color-primary); margin-bottom:8px;">Mrs. Nabanita Chaudhuri</h2>
            <span style="color:var(--color-gold-dark); font-weight:700; text-transform:uppercase; font-size:0.85rem;">Chairman & Founder</span>
            <p style="margin-top:20px; line-height:1.8; color:var(--text-muted);">
              "Dear Parents and Students,<br><br>
              Welcome to Philomel Public School (Arambagh). When we laid the foundation of this institution, our aspiration was singular: to create a sanctuary of learning where children discover the joy of inquiry and the confidence to dream big.
              <br><br>
              We commit to fostering global perspectives while anchoring our students deeply in moral values. I invite you to join our vibrant community."
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 6. PRINCIPAL'S MESSAGE VIEW
  principal: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Principal's Address to Students & Parents</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:300px 1fr; gap:40px; align-items:start;">
          <img src="${IMAGES.principal}" alt="Principal" style="width:100%; border-radius:var(--radius-lg); border:2px solid var(--color-gold);">
          <div class="luxury-card">
            <h2 style="font-family:var(--font-heading); color:var(--color-primary); margin-bottom:8px;">Mr. Joyabrata Goswami</h2>
            <span style="color:var(--color-gold-dark); font-weight:700; text-transform:uppercase; font-size:0.85rem;">Principal & Academic Director</span>
            <p style="margin-top:20px; line-height:1.8; color:var(--text-muted);">
              "Greetings to all,<br><br>
              At Philomel, education is an active partnership between students, educators, and parents. Our faculty members are not just teachers, but mentors who nurture curiosity and celebrate individual milestones.
              <br><br>
              We look forward to guiding your child toward academic brilliance and personal growth."
            </p>
          </div>
        </div>
      </div>
    </section>
  `,



  // 9. ACADEMICS OVERVIEW
  academics: () => `
    <div style="background:var(--color-primary); color:#FFF; padding:120px 0 60px; text-align:center;">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Academic Curriculum & Wings</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="features-grid">
          <div class="luxury-card" onclick="navigate('pre-primary')" style="cursor:pointer;">
            <i class="fa-solid fa-shapes" style="font-size:2.5rem; color:var(--color-gold);"></i>
            <h3 style="margin-top:12px;">Pre-Primary</h3>
          </div>
          <div class="luxury-card" onclick="navigate('primary')" style="cursor:pointer;">
            <i class="fa-solid fa-child" style="font-size:2.5rem; color:var(--color-gold);"></i>
            <h3 style="margin-top:12px;">Primary School</h3>
          </div>
          <div class="luxury-card" onclick="navigate('curriculum')" style="cursor:pointer;">
            <i class="fa-solid fa-diagram-project" style="font-size:2.5rem; color:var(--color-gold);"></i>
            <h3 style="margin-top:12px;">Curriculum Map</h3>
          </div>
        </div>
      </div>
    </section>
  `,

  // 10. PRE PRIMARY VIEW
  'pre-primary': () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Pre-Primary Wing (Nursery & KG)</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;">
          <img src="${IMAGES.artCraft}" alt="Art Craft" style="width:100%; border-radius:var(--radius-lg);">
          <div>
            <h2 class="section-title">Nurturing Wonder & Joyful Discovery</h2>
            <p class="section-description">Our early years program provides a warm, stimulating environment where young learners build motor skills, early phonics, numeracy, and social habits through play.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 11. PRIMARY VIEW
  primary: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Primary School (Grades 1-5)</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;">
          <div>
            <h2 class="section-title">Foundations of Critical Inquiry</h2>
            <p class="section-description">Primary students engage in interdisciplinary learning modules combining science, mathematics, languages, social studies, and performing arts.</p>
          </div>
          <img src="${IMAGES.studentLearning}" alt="Primary Learning" style="width:100%; border-radius:var(--radius-lg);">
        </div>
      </div>
    </section>
  `,



  // 15. CURRICULUM VIEW
  curriculum: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Dual Pathway Curriculum</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px;">
          <div class="luxury-card">
            <h2>CBSE Board Curriculum</h2>
            <p style="margin-top:12px; color:var(--text-muted);">Comprehensive NCERT alignment integrated with national competitive exam coaching.</p>
          </div>
          <div class="luxury-card">
            <h2>Cambridge International (IGCSE & A-Levels)</h2>
            <p style="margin-top:12px; color:var(--text-muted);">Global qualification recognized by top Ivy League and UK universities worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 16. ADMISSIONS OVERVIEW
  admissions: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Admissions 2026-2027</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container" style="text-align:center;">
        <h2 class="section-title">Join the Philomel Community</h2>
        <p class="section-description" style="max-width:700px; margin:0 auto 40px;">Admissions are currently open for Nursery through Grade 11. Start your child's journey to brilliance today.</p>
        <div style="display:flex; justify-content:center; gap:20px;">
          <button class="btn-gold" onclick="openAdmissionModal()"><i class="fa-solid fa-file-pen"></i> Apply Now</button>
          <button class="btn-primary-dark" onclick="navigate('fee-structure')"><i class="fa-solid fa-calculator"></i> View Fee Structure</button>
        </div>
      </div>
    </section>
  `,

  // 17. ADMISSION PROCESS VIEW
  'admission-process': () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Step-by-Step Admission Process</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container" style="max-width:800px;">
        <div class="luxury-card" style="margin-bottom:20px;">
          <h3>Step 1: Online Registration</h3>
          <p>Fill out the basic online registration form and pay the prospectus fee.</p>
        </div>
        <div class="luxury-card" style="margin-bottom:20px;">
          <h3>Step 2: Campus Interaction / Entrance Assessment</h3>
          <p>Student assessment for Grade 1 and above; informal interaction for Nursery/KG.</p>
        </div>
        <div class="luxury-card" style="margin-bottom:20px;">
          <h3>Step 3: Document Verification</h3>
          <p>Submit birth certificate, previous school report card, transfer certificate, and photos.</p>
        </div>
        <div class="luxury-card">
          <h3>Step 4: Fee Payment & Seat Confirmation</h3>
          <p>Complete admission fee payment to secure your seat.</p>
        </div>
      </div>
    </section>
  `,



  // 20. INFRASTRUCTURE & CAMPUS VIEW
  infrastructure: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">State-of-the-Art Infrastructure</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="gallery-grid">
          <div class="gallery-item"><img src="${IMAGES.classroom1}" alt="Classroom"><div class="gallery-caption">Smart Interactive Classrooms</div></div>
          <div class="gallery-item"><img src="${IMAGES.classroom2}" alt="STEM Lab"><div class="gallery-caption">Advanced Robotics & STEM Hub</div></div>
          <div class="gallery-item"><img src="${IMAGES.playground}" alt="Sports"><div class="gallery-caption">Olympic Size Athletic Stadium</div></div>
          <div class="gallery-item"><img src="${IMAGES.campus}" alt="Library"><div class="gallery-caption">20,000+ Volume Digital Library</div></div>
        </div>
      </div>
    </section>
  `,



  // 22. SPORTS VIEW
  sports: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Sports & Athletic Academy</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center;">
          <img src="${IMAGES.sports}" alt="Sports" style="width:100%; border-radius:var(--radius-lg);">
          <div>
            <h2 class="section-title">Building Champions On & Off the Field</h2>
            <p class="section-description">Dedicated coaching in Football, Cricket, Swimming, Basketball, Tennis, Badminton, and Martial Arts under licensed national trainers.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 23. SAFETY & MEDICAL VIEW
  safety: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Safety, Health & Transportation</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="features-grid">
          <div class="luxury-card">
            <h3>24/7 CCTV & Security Guards</h3>
            <p>Over 200 HD cameras monitored in real time with gated access control.</p>
          </div>
          <div class="luxury-card">
            <h3>On-Campus Medical Infirmary</h3>
            <p>Full-time registered nurse and tie-up with multi-specialty hospital emergency unit.</p>
          </div>
          <div class="luxury-card">
            <h3>GPS Tracked Buses</h3>
            <p>Live bus tracking app for parents with female bus attendants on every route.</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 24. GALLERY VIEW
  gallery: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Campus Photo & Video Gallery</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="gallery-filter">
          <button class="filter-btn active" onclick="filterGallery('all')">All Moments</button>
          <button class="filter-btn" onclick="filterGallery('academics')">Academics</button>
          <button class="filter-btn" onclick="filterGallery('sports')">Sports</button>
          <button class="filter-btn" onclick="filterGallery('cultural')">Cultural Events</button>
        </div>

        <div class="gallery-grid" id="galleryContainer">
          <div class="gallery-item"><img src="${IMAGES.annualFunction}" alt="Annual Function"><div class="gallery-caption">Annual Cultural Fiesta</div></div>
          <div class="gallery-item"><img src="${IMAGES.celebration}" alt="Celebration"><div class="gallery-caption">Graduation Day Ceremony</div></div>
          <div class="gallery-item"><img src="${IMAGES.sports}" alt="Sports"><div class="gallery-caption">Inter-House Sports Meet</div></div>
          <div class="gallery-item"><img src="${IMAGES.dance}" alt="Dance"><div class="gallery-caption">Performing Arts Showcase</div></div>
          <div class="gallery-item"><img src="${IMAGES.artCraft}" alt="Art"><div class="gallery-caption">Fine Arts Exhibition</div></div>
          <div class="gallery-item"><img src="${IMAGES.happyStudents}" alt="Students"><div class="gallery-caption">Joyful Student Life</div></div>
        </div>
      </div>
    </section>
  `,



  // 27. DOWNLOADS & PROSPECTUS VIEW
  downloads: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Download Official Documents</h1>
      </div>
    </div>
    <section class="section-padding" id="prospectus">
      <div class="section-container" style="max-width:700px;">
        <div class="luxury-card" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
          <div>
            <h4>School Information Prospectus 2026-27</h4>
            <span style="font-size:0.8rem; color:var(--text-muted);">PDF Document (4.2 MB)</span>
          </div>
          <button class="btn-gold" onclick="alert('Downloading official Philomel Prospectus PDF...')"><i class="fa-solid fa-download"></i> Download</button>
        </div>
        <div class="luxury-card" style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h4>Academic Calendar 2026-27</h4>
            <span style="font-size:0.8rem; color:var(--text-muted);">PDF Document (1.1 MB)</span>
          </div>
          <button class="btn-gold" onclick="alert('Downloading Academic Calendar PDF...')"><i class="fa-solid fa-download"></i> Download</button>
        </div>
      </div>
    </section>
  `,

  // 28. CAREER VIEW
  careers: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Career Opportunities</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container" style="max-width:800px;">
        <div class="luxury-card" style="margin-bottom:20px;">
          <h3>PGT Physics & Mathematics Faculty</h3>
          <p>Requirement: M.Sc + B.Ed with minimum 5 years teaching experience in CBSE / Cambridge syllabus.</p>
          <button class="btn-gold" style="margin-top:12px;" onclick="alert('Thank you for applying. Send your CV to careers@philomelschool.edu.in')">Apply for Position</button>
        </div>
      </div>
    </section>
  `,

  // 29. ALUMNI VIEW
  alumni: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Global Alumni Network</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="programs-grid">
          <div class="luxury-card">
            <h4>Ananya Sen (Batch of 2018)</h4>
            <span style="color:var(--color-gold-dark);">Software Engineer @ Google USA</span>
            <p style="margin-top:8px;">"Philomel gave me the foundation in robotics and math that paved my way to MIT."</p>
          </div>
        </div>
      </div>
    </section>
  `,

  // 30. FAQ VIEW
  faq: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Frequently Asked Questions</h1>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container" style="max-width:800px;">
        <div class="luxury-card" style="margin-bottom:16px;">
          <h4>Q: What is the minimum age for Nursery admission?</h4>
          <p style="margin-top:8px; color:var(--text-muted);">A: 3 years as of March 31, 2026.</p>
        </div>
        <div class="luxury-card" style="margin-bottom:16px;">
          <h4>Q: Are bus transport fees included in the tuition fee?</h4>
          <p style="margin-top:8px; color:var(--text-muted);">A: Transport fees are calculated separately based on pickup location distance.</p>
        </div>
      </div>
    </section>
  `,

  // 31. CONTACT VIEW
  contact: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(212,160,23,0.15); border:1px solid var(--border-gold); padding:6px 16px; border-radius:30px; color:var(--color-gold); font-size:0.85rem; font-weight:600; margin-bottom:16px;">
          <i class="fa-solid fa-map-pin"></i> Arambagh Campus, Dist. Hooghly
        </div>
        <h1 style="font-family:var(--font-heading); font-size:3rem; margin-bottom:12px;">Contact & Campus Location</h1>
        <p style="max-width:650px; margin:0 auto; color:rgba(255,255,255,0.85); font-size:1.05rem;">Visit our modern campus or connect with our admissions and administrative desk for inquiries, tours, and assistance.</p>
      </div>
    </div>

    <section class="section-padding">
      <div class="section-container">
        <div style="display:grid; grid-template-columns:1.1fr 0.9fr; gap:36px; margin-bottom:48px;">
          
          <!-- Campus Address & Details Card -->
          <div class="luxury-card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border-light);">
                <div style="width:48px; height:48px; border-radius:12px; background:rgba(212,160,23,0.15); color:var(--color-gold); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">
                  <i class="fa-solid fa-school-flag"></i>
                </div>
                <div>
                  <h2 style="font-family:var(--font-heading); font-size:1.4rem; margin:0; color:var(--color-primary-dark);">PHILOMEL PUBLIC SCHOOL</h2>
                  <span style="font-size:0.9rem; font-weight:600; color:var(--color-gold-dark);">Arambagh Campus</span>
                </div>
              </div>

              <div style="display:flex; flex-direction:column; gap:16px;">
                <div style="display:flex; gap:14px;">
                  <i class="fa-solid fa-location-dot" style="color:var(--color-gold); font-size:1.2rem; margin-top:3px; flex-shrink:0;"></i>
                  <div>
                    <strong style="display:block; color:var(--color-primary-dark); font-size:0.95rem;">Campus Address</strong>
                    <p style="margin:2px 0 0; color:var(--text-muted); line-height:1.5;">
                      682, Link Road, Near Arambagh Court<br>
                      Talar Par P.O – Arambagh, Dist – Hooghly<br>
                      Pin – 712601
                    </p>
                  </div>
                </div>

                <div style="display:flex; gap:14px; background:rgba(212,160,23,0.08); padding:12px 14px; border-radius:10px; border-left:3px solid var(--color-gold);">
                  <i class="fa-solid fa-hospital" style="color:var(--color-gold-dark); font-size:1.1rem; margin-top:2px; flex-shrink:0;"></i>
                  <div>
                    <strong style="display:block; color:var(--color-primary-dark); font-size:0.85rem; text-transform:uppercase; letter-spacing:0.5px;">Key Landmark</strong>
                    <span style="color:var(--text-dark); font-weight:600; font-size:0.95rem;">Dr. Gangi Babu's Nursing Home</span>
                  </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:6px;">
                  <div style="display:flex; gap:12px;">
                    <i class="fa-solid fa-phone" style="color:var(--color-gold); margin-top:3px;"></i>
                    <div>
                      <strong style="display:block; font-size:0.85rem; color:var(--color-primary-dark);">Call Desk</strong>
                      <span style="font-size:0.9rem; color:var(--text-muted);">+91 9674186260<br>+91 8777539351</span>
                    </div>
                  </div>
                  <div style="display:flex; gap:12px;">
                    <i class="fa-solid fa-envelope" style="color:var(--color-gold); margin-top:3px;"></i>
                    <div>
                      <strong style="display:block; font-size:0.85rem; color:var(--color-primary-dark);">Email Inquiries</strong>
                      <span style="font-size:0.85rem; color:var(--text-muted); word-break:break-all;"><a href="mailto:ppsarambagh@gmail.com" style="color:inherit; text-decoration:none;">ppsarambagh@gmail.com</a></span>
                    </div>
                  </div>
                </div>

                <div style="display:flex; gap:12px; margin-top:4px;">
                  <i class="fa-solid fa-clock" style="color:var(--color-gold); margin-top:3px;"></i>
                  <div>
                    <strong style="display:block; font-size:0.85rem; color:var(--color-primary-dark);">School & Office Timing</strong>
                    <span style="font-size:0.9rem; color:var(--text-muted);">Monday to Friday: 10:00 AM to 3:00 PM (Saturday & Sunday Closed)</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="display:flex; gap:12px; margin-top:24px; flex-wrap:wrap;">
              <a href="https://maps.google.com/?q=682+Link+Road+Near+Arambagh+Court+Arambagh+Hooghly+712601" target="_blank" rel="noopener noreferrer" class="btn-gold" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px;">
                <i class="fa-solid fa-diamond-turn-right"></i> Get Directions
              </a>
              <a href="https://wa.me/918777539351?text=Hello%20Philomel%20Public%20School%20Arambagh%20Team%2C%20I%20would%20like%20to%20inquire%20about%20admissions." target="_blank" rel="noopener noreferrer" class="btn-outline-gold" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px; border:1px solid var(--border-gold); padding:10px 18px; border-radius:30px; color:var(--color-primary-dark); font-weight:600;">
                <i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.1rem;"></i> WhatsApp Us
              </a>
            </div>
          </div>

          <!-- Interactive Google Maps Card -->
          <div class="luxury-card" style="padding:0; overflow:hidden; display:flex; flex-direction:column;">
            <div style="padding:16px 20px; background:var(--color-primary-dark); color:#FFF; display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:600; font-size:0.95rem;"><i class="fa-solid fa-map-location-dot" style="color:var(--color-gold); margin-right:8px;"></i> Arambagh Campus Map</span>
              <span style="font-size:0.8rem; background:rgba(212,160,23,0.25); color:var(--color-gold); padding:2px 10px; border-radius:12px;">Hooghly, WB - 712601</span>
            </div>
            <div style="flex:1; min-height:360px; width:100%; position:relative;">
              <iframe 
                src="https://maps.google.com/maps?q=682+Link+Road+Near+Arambagh+Court+Arambagh+Hooghly+712601&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style="border:0; min-height:360px; display:block;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>

        <!-- Inquiry Form -->
        <div class="luxury-card" style="max-width:900px; margin:0 auto;">
          <div style="text-align:center; margin-bottom:24px;">
            <h2 style="font-family:var(--font-heading); margin-bottom:6px;">Send Us an Inquiry</h2>
            <p style="color:var(--text-muted);">Have questions about admission criteria, school transport routes in Hooghly, or curriculum? Write to us.</p>
          </div>
          <form onsubmit="event.preventDefault(); alert('Inquiry received! Our Arambagh admissions desk will contact you within 24 business hours.');">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:16px;">
              <div class="form-group">
                <label class="form-label">Parent / Guardian Full Name</label>
                <input type="text" class="form-input" required placeholder="e.g. Subhashish Roy">
              </div>
              <div class="form-group">
                <label class="form-label">Contact Phone Number</label>
                <input type="tel" class="form-input" required placeholder="e.g. +91 9674186260">
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:16px;">
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-input" required placeholder="parent@example.com">
              </div>
              <div class="form-group">
                <label class="form-label">Grade / Class Interested</label>
                <select class="form-select">
                  <option>Nursery / KG (Pre-Primary)</option>
                  <option>Grade 1 to Grade 5 (Primary)</option>
                  <option>Grade 6 to Grade 10 (Secondary)</option>
                  <option>Senior Secondary (CBSE / Cambridge)</option>
                </select>
              </div>
            </div>
            <div class="form-group" style="margin-bottom:24px;">
              <label class="form-label">Message / Specific Questions</label>
              <textarea class="form-textarea" rows="4" required placeholder="Ask about syllabus, transport coverage in Arambagh / Hooghly, hostel, fee structure..."></textarea>
            </div>
            <div style="text-align:center;">
              <button type="submit" class="btn-gold" style="padding:14px 36px; font-size:1rem;"><i class="fa-solid fa-paper-plane"></i> Submit Inquiry to Arambagh Office</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  `,

  // 32. PRIVACY & TERMS VIEW
  privacy: () => `
    <div class="section-padding">
      <div class="section-container" style="max-width:800px;">
        <h1 style="font-family:var(--font-heading);">Privacy Policy & Data Security</h1>
        <p style="margin-top:20px; line-height:1.8; color:var(--text-muted);">We are committed to safeguarding student data privacy in full compliance with global educational protection regulations.</p>
      </div>
    </div>
  `,

  terms: () => `
    <div class="section-padding">
      <div class="section-container" style="max-width:800px;">
        <h1 style="font-family:var(--font-heading);">Terms of Service</h1>
        <p style="margin-top:20px; line-height:1.8; color:var(--text-muted);">Use of the Philomel Public School (Arambagh) web platform and ERP services is subject to institutional guidelines.</p>
      </div>
    </div>
  `,

  // 33. ENTERPRISE ERP DASHBOARD VIEW
  portal: () => `
    <div class="section-padding" style="background:var(--bg-surface);">
      <div class="section-container">
        <div class="portal-container">
          <div class="portal-header">
            <div class="portal-user">
              <img src="${IMAGES.happyStudents}" alt="User Avatar" class="portal-avatar">
              <div>
                <h3 style="margin:0; font-family:var(--font-heading); text-transform:capitalize;">${state.activeRole} Dashboard</h3>
                <span style="font-size:0.8rem; color:var(--color-gold-light);">Active Session: 2026-27 | ID: PPS-2026-8891</span>
              </div>
            </div>
            <button class="btn-outline-white" style="padding:6px 16px; font-size:0.8rem;" onclick="navigate('home')"><i class="fa-solid fa-right-from-bracket"></i> Logout ERP</button>
          </div>

          <div class="portal-content">
            <div class="portal-metrics">
              <div class="metric-card">
                <div class="metric-value">96.8%</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Term Attendance</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">A+</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Current Grade Point</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">0</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Pending Fees</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">12</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">Library Books Issued</div>
              </div>
            </div>

            <div class="luxury-card">
              <h4 style="font-family:var(--font-heading); color:var(--color-primary); margin-bottom:16px;">Class Schedule & Notices</h4>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:12px;">
                <li style="padding:12px; background:var(--bg-surface); border-radius:var(--radius-sm); display:flex; justify-content:space-between;">
                  <span><i class="fa-solid fa-clock" style="color:var(--color-gold);"></i> 09:00 AM - Physics Lab Experiment</span>
                  <span class="announcement-badge">Lab 3</span>
                </li>
                <li style="padding:12px; background:var(--bg-surface); border-radius:var(--radius-sm); display:flex; justify-content:space-between;">
                  <span><i class="fa-solid fa-clock" style="color:var(--color-gold);"></i> 11:30 AM - AI & Python Robotics Module</span>
                  <span class="announcement-badge">STEM Hub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  // 34. EVENTS VIEW
  events: () => `
    <div class="page-hero-banner animate-fade-up">
      <div class="section-container">
        <span class="section-subtitle"><i class="fa-solid fa-calendar-days"></i> School Calendar</span>
        <h1>Upcoming Events & Festivities</h1>
        <p>Explore our vibrant calendar of inter-school olympiads, sports tournaments, cultural celebrations, and scientific exhibitions.</p>
      </div>
    </div>
    <div class="section-padding">
      <div class="section-container">
        <div class="programs-grid">
          <div class="luxury-card" style="border-left: 4px solid var(--color-gold);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <span class="announcement-badge"><i class="fa-solid fa-trophy"></i> Sports Meet</span>
              <span style="font-size:0.85rem; color:var(--text-muted);"><i class="fa-solid fa-calendar"></i> October 2026</span>
            </div>
            <h3 style="font-family:var(--font-heading); color:var(--text-main); font-size:1.4rem; margin-bottom:8px;">Annual Inter-House Athletics Championship</h3>
            <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.6; margin-bottom:16px;">Track and field events, football, basketball, archery, and swimming tournaments across all student houses.</p>
            <button class="btn-outline-white" style="color:var(--color-primary); border-color:var(--border-gold);" onclick="navigate('sports')">View Sports Arena &rarr;</button>
          </div>

          <div class="luxury-card" style="border-left: 4px solid var(--color-accent);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <span class="announcement-badge"><i class="fa-solid fa-atom"></i> STEM Hub</span>
              <span style="font-size:0.85rem; color:var(--text-muted);"><i class="fa-solid fa-calendar"></i> November 2026</span>
            </div>
            <h3 style="font-family:var(--font-heading); color:var(--text-main); font-size:1.4rem; margin-bottom:8px;">Philomel Science & Robotics Expo</h3>
            <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.6; margin-bottom:16px;">Innovative student projects in AI, automation, renewable energy, and bio-technological research demonstrations.</p>
            <button class="btn-outline-white" style="color:var(--color-primary); border-color:var(--border-gold);" onclick="navigate('infrastructure')">Explore STEM Labs &rarr;</button>
          </div>

          <div class="luxury-card" style="border-left: 4px solid var(--color-gold);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <span class="announcement-badge"><i class="fa-solid fa-masks-theater"></i> Arts & Culture</span>
              <span style="font-size:0.85rem; color:var(--text-muted);"><i class="fa-solid fa-calendar"></i> December 2026</span>
            </div>
            <h3 style="font-family:var(--font-heading); color:var(--text-main); font-size:1.4rem; margin-bottom:8px;">Annual Cultural Gala & Symphony</h3>
            <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.6; margin-bottom:16px;">Celebrating theatrical performances, classical & western music ensembles, dance dramas, and fine arts exhibitions.</p>
            <button class="btn-outline-white" style="color:var(--color-primary); border-color:var(--border-gold);" onclick="navigate('gallery')">View Media Gallery &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  `,

  // 35. FACILITIES VIEW (ALIAS)
  facilities: () => views.infrastructure(),

  // 36. ACTIVITIES VIEW (ALIAS)
  activities: () => views.events(),

  // 37. FEE STRUCTURE VIEW
  'fee-structure': () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <span style="color:var(--color-gold); letter-spacing:2px; font-weight:700; text-transform:uppercase; font-size:0.85rem;">Admissions 2026-27</span>
        <h1 style="font-family:var(--font-heading); font-size:3rem; margin-top:8px;">Transparent Fee Structure</h1>
        <p>Philomel Public School (Arambagh) provides world-class educational infrastructure at transparent, all-inclusive value.</p>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container" style="max-width:900px;">
        <div class="luxury-card" style="margin-bottom:24px;">
          <h2 style="font-family:var(--font-heading); color:var(--color-primary); margin-bottom:16px;">Academic Session 2026-2027</h2>
          <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; text-align:left;">
              <thead>
                <tr style="background:var(--color-primary-dark); color:#FFF; font-family:var(--font-btn);">
                  <th style="padding:14px 16px; border-radius:8px 0 0 0;">Wing / Grade Level</th>
                  <th style="padding:14px 16px;">Admission Fee (One-time)</th>
                  <th style="padding:14px 16px; border-radius:0 8px 0 0;">Monthly Tuition Fee</th>
                </tr>
              </thead>
              <tbody style="font-size:0.95rem;">
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:14px 16px;"><strong>Pre-Primary (Nursery, KG, Playgroup)</strong></td>
                  <td style="padding:14px 16px; color:var(--color-gold-dark); font-weight:600;">₹15,000</td>
                  <td style="padding:14px 16px; font-weight:600;">₹2,200 / month</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:14px 16px;"><strong>Primary School (Grades 1 to 5)</strong></td>
                  <td style="padding:14px 16px; color:var(--color-gold-dark); font-weight:600;">₹18,000</td>
                  <td style="padding:14px 16px; font-weight:600;">₹2,600 / month</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-color);">
                  <td style="padding:14px 16px;"><strong>Middle & Secondary (Grades 6 to 10)</strong></td>
                  <td style="padding:14px 16px; color:var(--color-gold-dark); font-weight:600;">₹22,000</td>
                  <td style="padding:14px 16px; font-weight:600;">₹3,100 / month</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px;"><strong>Senior Secondary (Grades 11 & 12)</strong></td>
                  <td style="padding:14px 16px; color:var(--color-gold-dark); font-weight:600;">₹25,000</td>
                  <td style="padding:14px 16px; font-weight:600;">₹3,800 / month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="text-align:center; margin-top:30px;">
          <button class="btn-gold" onclick="openAdmissionModal()"><i class="fa-solid fa-paper-plane"></i> Apply for 2026-27 Admission</button>
        </div>
      </div>
    </section>
  `,

  // 38. SITEMAP VIEW
  sitemap: () => `
    <div class="page-hero-banner">
      <div class="section-container">
        <h1 style="font-family:var(--font-heading); font-size:3rem;">Website Sitemap & Directory</h1>
        <p>Quick navigation index for all institutional sections of Philomel Public School (Arambagh).</p>
      </div>
    </div>
    <section class="section-padding">
      <div class="section-container">
        <div class="features-grid">
          <div class="luxury-card">
            <h3>Institution & Legacy</h3>
            <ul style="list-style:none; padding:0; margin-top:12px; display:flex; flex-direction:column; gap:8px;">
              <li><a href="#about" onclick="navigate('about')" style="color:var(--color-primary); text-decoration:none;">&rarr; About School</a></li>
              <li><a href="#history" onclick="navigate('history')" style="color:var(--color-primary); text-decoration:none;">&rarr; History & Milestones</a></li>
              <li><a href="#vision" onclick="navigate('vision')" style="color:var(--color-primary); text-decoration:none;">&rarr; Vision & Mission</a></li>
              <li><a href="#chairman" onclick="navigate('chairman')" style="color:var(--color-primary); text-decoration:none;">&rarr; Chairman's Message</a></li>
              <li><a href="#principal" onclick="navigate('principal')" style="color:var(--color-primary); text-decoration:none;">&rarr; Principal's Message</a></li>
            </ul>
          </div>
          <div class="luxury-card">
            <h3>Academics & Wings</h3>
            <ul style="list-style:none; padding:0; margin-top:12px; display:flex; flex-direction:column; gap:8px;">
              <li><a href="#academics" onclick="navigate('academics')" style="color:var(--color-primary); text-decoration:none;">&rarr; Academic Wings</a></li>
              <li><a href="#pre-primary" onclick="navigate('pre-primary')" style="color:var(--color-primary); text-decoration:none;">&rarr; Pre-Primary</a></li>
              <li><a href="#primary" onclick="navigate('primary')" style="color:var(--color-primary); text-decoration:none;">&rarr; Primary (Grades 1-5)</a></li>
              <li><a href="#curriculum" onclick="navigate('curriculum')" style="color:var(--color-primary); text-decoration:none;">&rarr; Curriculum Map</a></li>
            </ul>
          </div>
          <div class="luxury-card">
            <h3>Admissions & Campus</h3>
            <ul style="list-style:none; padding:0; margin-top:12px; display:flex; flex-direction:column; gap:8px;">
              <li><a href="#admissions" onclick="navigate('admissions')" style="color:var(--color-primary); text-decoration:none;">&rarr; Admissions Overview</a></li>
              <li><a href="#admission-process" onclick="navigate('admission-process')" style="color:var(--color-primary); text-decoration:none;">&rarr; Admission Process</a></li>
              <li><a href="#facilities" onclick="navigate('facilities')" style="color:var(--color-primary); text-decoration:none;">&rarr; Facilities & Campus</a></li>
              <li><a href="#sports" onclick="navigate('sports')" style="color:var(--color-primary); text-decoration:none;">&rarr; Sports Academy</a></li>
              <li><a href="#gallery" onclick="navigate('gallery')" style="color:var(--color-primary); text-decoration:none;">&rarr; Media Gallery</a></li>
              <li><a href="#activities" onclick="navigate('activities')" style="color:var(--color-primary); text-decoration:none;">&rarr; Activities & Events</a></li>
              <li><a href="#contact" onclick="navigate('contact')" style="color:var(--color-primary); text-decoration:none;">&rarr; Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,

  // 39. 404 NOT FOUND VIEW
  404: () => `
    <div class="section-padding" style="text-align:center; min-height:60vh; display:flex; align-items:center; justify-content:center;">
      <div class="section-container">
        <h1 style="font-size:6rem; font-family:var(--font-heading); color:var(--color-gold);">404</h1>
        <h2>Page Not Found</h2>
        <p style="color:var(--text-muted); margin:16px 0 24px;">The page route you requested does not exist or has been moved.</p>
        <button class="btn-gold" onclick="navigate('home')"><i class="fa-solid fa-house"></i> Return to Homepage</button>
      </div>
    </div>
  `
};

// --- View Renderer ---
function renderTargetView(route) {
  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  if (views[route]) {
    appRoot.innerHTML = views[route]();
  } else {
    appRoot.innerHTML = views['404'] ? views['404']() : '<div class="section-padding" style="text-align:center;"><h1>Page Not Found</h1></div>';
  }
}

// Helper: Update Navigation Link Active Highlight
function updateNavHighlight(route) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    const link = item.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href === `#${route}` || (route === 'home' && (href === '#home' || href === '#'))) {
        item.classList.add('active');
      }
    }
  });
}

// --- Global Luxury Full-Screen Brand Page Transition Router ---
function navigate(route, isInitial = false, fromHistory = false) {
  const targetRoute = route ? route.toLowerCase().trim() : 'home';

  // Auto-close mobile navigation drawer if open
  if (state.mobileMenuOpen) {
    toggleMobileMenu();
  }

  // Ensure body scroll is normal and fully scrollable
  document.body.style.overflow = 'auto';

  // If already navigating to this exact route in an active transition, prevent redundant execution
  if (!isInitial && state.isTransitioning && state.targetRoute === targetRoute) {
    return;
  }

  // If same route requested and not initial load, smoothly scroll to top
  if (!isInitial && state.currentRoute === targetRoute && !state.isTransitioning) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  state.targetRoute = targetRoute;

  const appRoot = document.getElementById('app-root');
  const transitionScreen = document.getElementById('ppsTransitionScreen');

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Clear any existing transition timer to avoid stale timers
  if (state.transitionTimer) {
    clearTimeout(state.transitionTimer);
    state.transitionTimer = null;
  }

  // Fallback if reduced motion is requested or DOM elements missing
  if (prefersReducedMotion || !appRoot || !transitionScreen) {
    state.isTransitioning = false;
    state.currentRoute = targetRoute;
    renderTargetView(targetRoute);
    updateNavHighlight(targetRoute);
    if (!fromHistory && window.location.hash !== `#${targetRoute}`) {
      window.location.hash = targetRoute;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    initAnimations();
    return;
  }

  // Initial load: direct render without blocking full-screen overlay
  if (isInitial) {
    state.isTransitioning = false;
    state.currentRoute = targetRoute;
    renderTargetView(targetRoute);
    updateNavHighlight(targetRoute);
    if (!fromHistory && window.location.hash !== `#${targetRoute}`) {
      window.location.hash = targetRoute;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    initAnimations();
    return;
  }

  // --- Cinematic Full-Screen Brand Transition Sequence ---
  state.isTransitioning = true;

  // Step 1: Activate Full-Screen Overlay (Logo & School Name Glide In)
  transitionScreen.classList.remove('exiting');
  transitionScreen.classList.add('active');
  if (appRoot) appRoot.classList.add('page-fading');

  // Step 2: Swap View Behind Overlay at 280ms (Fully Opaque) & Reset Scroll
  state.transitionTimer = setTimeout(() => {
    state.currentRoute = targetRoute;
    renderTargetView(targetRoute);
    updateNavHighlight(targetRoute);

    if (!fromHistory && window.location.hash !== `#${targetRoute}`) {
      window.location.hash = targetRoute;
    }

    // Instant clean scroll reset to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    initAnimations();

    if (appRoot) appRoot.classList.remove('page-fading');

    // Step 3: Brief elegant pause with brand logo visible, then smoothly reveal new page
    state.transitionTimer = setTimeout(() => {
      transitionScreen.classList.remove('active');
      transitionScreen.classList.add('exiting');

      // Step 4: Complete transition & reset state after fade-out finishes (350ms)
      state.transitionTimer = setTimeout(() => {
        transitionScreen.classList.remove('exiting');
        state.isTransitioning = false;
      }, 350);
    }, 240);
  }, 280);
}

// --- Global Internal Link Interceptor ---
function initGlobalLinkInterceptor() {
  document.addEventListener('click', (e) => {
    // Locate enclosing anchor tag
    const link = e.target.closest('a');
    if (!link) return;

    // Ignore if default already handled, non-left-clicks, or modifier keys (Ctrl/Cmd/Shift/Alt)
    if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }

    // Ignore download links or links explicitly configured to open in new tab
    if (link.hasAttribute('download') || link.getAttribute('target') === '_blank') {
      return;
    }

    const rawHref = link.getAttribute('href');
    if (!rawHref) return;
    const href = rawHref.trim();

    // Ignore special protocols
    if (/^(javascript:|mailto:|tel:|sms:|blob:|data:)/i.test(href)) {
      return;
    }

    // External URL validation
    if (/^https?:\/\//i.test(href)) {
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) {
          return; // External domain: allow standard browser navigation
        }
      } catch (err) {
        return;
      }
    }

    // Extract target SPA route
    let route = '';
    if (href.startsWith('#')) {
      route = href.substring(1).trim();
    } else if (href.includes('#')) {
      route = href.split('#')[1].trim();
    } else {
      route = href.replace(/\.html$/i, '').replace(/^\/+/, '').trim();
    }

    route = route.toLowerCase();

    // If matches a known view in the application
    if (route && (views[route] || route === 'home')) {
      e.preventDefault();
      navigate(route);
      return;
    }

    // If same-page element anchor jump
    if (href.startsWith('#') && href.length > 1) {
      const el = document.getElementById(href.substring(1));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  }, { capture: false });
}

// --- Mobile Navigation Drawer Toggle ---
function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const icon = document.getElementById('hamburgerIcon');

  if (state.mobileMenuOpen) {
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    if (icon) icon.className = 'fa-solid fa-xmark';
    document.body.style.overflow = 'hidden';
  } else {
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (icon) icon.className = 'fa-solid fa-bars';
    document.body.style.overflow = '';
  }
}

// --- Mobile Submenu Toggle Handler ---
function toggleMobileSubmenu(event, menuIdOrEl) {
  if (event) {
    if (event.preventDefault) event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();
  }
  let targetLi;
  if (typeof menuIdOrEl === 'string') {
    targetLi = document.getElementById(menuIdOrEl);
  } else if (menuIdOrEl && menuIdOrEl.closest) {
    targetLi = menuIdOrEl.closest('li');
  }

  if (targetLi) {
    const isCurrentlyOpen = targetLi.classList.contains('open');
    
    // Close sibling open dropdowns for a clean accordion experience
    document.querySelectorAll('.mobile-nav-item.has-dropdown').forEach(item => {
      if (item !== targetLi) {
        item.classList.remove('open');
      }
    });

    if (isCurrentlyOpen) {
      targetLi.classList.remove('open');
    } else {
      targetLi.classList.add('open');
    }
  }
}

// --- Theme Toggle ---
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun" style="color:var(--color-gold);"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// --- Modal Handlers ---
function openAdmissionModal() {
  document.getElementById('admissionModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeAdmissionModal() {
  document.getElementById('admissionModal').classList.remove('active');
  if (!state.mobileMenuOpen) document.body.style.overflow = '';
}

function openVirtualTourModal() {
  const modal = document.getElementById('virtualTourModal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeVirtualTourModal() {
  const modal = document.getElementById('virtualTourModal');
  if (modal) modal.classList.remove('active');
  if (!state.mobileMenuOpen) document.body.style.overflow = '';
}

function openERPModal() {
  document.getElementById('erpModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeERPModal() {
  document.getElementById('erpModal').classList.remove('active');
  if (!state.mobileMenuOpen) document.body.style.overflow = '';
}

function openSearchModal() {
  document.getElementById('searchOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('globalSearchInput');
    if (input) input.focus();
  }, 100);
}
function closeSearchModal() {
  document.getElementById('searchOverlay').classList.remove('active');
  if (!state.mobileMenuOpen) document.body.style.overflow = '';
}

// Keyboard shortcuts for accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.mobileMenuOpen) toggleMobileMenu();
    closeAdmissionModal();
    closeERPModal();
    closeSearchModal();
    closeVirtualTourModal();
  }
});

// --- ERP Role Selector ---
function selectRole(role) {
  state.activeRole = role;
  document.querySelectorAll('#erpModal .filter-btn').forEach(btn => btn.classList.remove('active'));
  if(role === 'student') document.getElementById('roleStudentBtn').classList.add('active');
  if(role === 'parent') document.getElementById('roleParentBtn').classList.add('active');
  if(role === 'teacher') document.getElementById('roleTeacherBtn').classList.add('active');
}

function handleERPLogin(event) {
  event.preventDefault();
  closeERPModal();
  navigate('portal');
}

// --- Admission Step Wizard Handler ---
function nextStep(step) {
  // Hide all step contents
  for(let i=1; i<=4; i++) {
    const el = document.getElementById('step' + i);
    if(el) el.style.display = 'none';
    const ind = document.getElementById('stepIndicator' + i);
    if(ind) ind.classList.remove('active');
  }

  // Show target step
  const target = document.getElementById('step' + step);
  if(target) target.style.display = 'block';

  // Mark indicators up to target step
  for(let i=1; i<=step; i++) {
    const ind = document.getElementById('stepIndicator' + i);
    if(ind) ind.classList.add('active');
  }

  if(step === 4) {
    const name = document.getElementById('admFirstName').value + ' ' + document.getElementById('admLastName').value;
    const grade = document.getElementById('admGrade').value;
    const phone = document.getElementById('admPhone').value;
    document.getElementById('summaryReviewText').innerHTML = `
      <strong>Applicant:</strong> ${name}<br>
      <strong>Target Grade:</strong> ${grade}<br>
      <strong>Parent Phone:</strong> ${phone}<br>
      <strong>Registration Fee:</strong> ₹1,500
    `;
  }
}

function handleAdmissionSubmit(event) {
  event.preventDefault();
  alert('Congratulations! Admission Application Submitted Successfully. Reference ID: PPS-2026-ADM-' + Math.floor(1000 + Math.random()*9000));
  closeAdmissionModal();
}

// --- Live Search ---
const sitePages = [
  { title: 'Home - Philomel Public School (Arambagh)', route: 'home', keywords: 'homepage welcome overview school arambagh' },
  { title: 'About Us - Legacy, Vision & Leadership', route: 'about', keywords: 'about school history founders advisory hooghly' },
  { title: 'Academic Wings & Dual Curriculum (CBSE / Cambridge)', route: 'academics', keywords: 'academics syllabus classes grades education' },
  { title: 'Pre-Primary School (Nursery / KG / Playgroup)', route: 'pre-primary', keywords: 'kindergarten montessori early years toddler' },
  { title: 'Primary School (Grades 1-5)', route: 'primary', keywords: 'elementary classes subjects junior' },
  { title: 'Dual Curriculum (CBSE & Cambridge Map)', route: 'curriculum', keywords: 'curriculum board cbse cambridge igcse' },
  { title: 'Admissions 2026-27 & Online Application', route: 'admissions', keywords: 'apply register fees form 2026 2027 entrance' },
  { title: 'Step-by-Step Admission Process', route: 'admission-process', keywords: 'process verification documents dates entrance test' },
  { title: 'Transparent Fee Structure 2026-27', route: 'fee-structure', keywords: 'fees tuition cost admission fee payment structure' },
  { title: 'Campus Facilities & Smart Infrastructure', route: 'facilities', keywords: 'facilities infrastructure classrooms library stem labs' },
  { title: 'Sports Academy & Athletic Stadium', route: 'sports', keywords: 'football cricket swimming games playground athletics' },
  { title: 'Safety, Health & GPS Transport System', route: 'safety', keywords: 'safety cctv security bus transport infirmary clinic' },
  { title: 'Media Photo & Video Gallery', route: 'gallery', keywords: 'photos pictures images videos moments annual function' },
  { title: 'Upcoming Events & Activities', route: 'activities', keywords: 'events activities sports meet science expo gala calendar' },
  { title: "Chairman Mrs. Nabanita Chaudhuri's Message", route: 'chairman', keywords: 'leadership founder chairman nabanita chaudhuri' },
  { title: "Principal Mr. Joyabrata Goswami's Message", route: 'principal', keywords: 'headmaster academic leader principal joyabrata goswami' },
  { title: 'Download Official School Prospectus PDF', route: 'downloads', keywords: 'brochure calendar syllabus pdf prospectus' },
  { title: 'Career Opportunities & Teaching Jobs', route: 'careers', keywords: 'careers jobs hiring teachers faculty vacancies' },
  { title: 'Global Alumni Network', route: 'alumni', keywords: 'alumni graduates network community' },
  { title: 'Admissions Frequently Asked Questions (FAQ)', route: 'faq', keywords: 'faq questions help answers admission' },
  { title: 'Contact & Campus Location (Arambagh, Hooghly - 712601)', route: 'contact', keywords: 'arambagh hooghly link road court talar par landmark gangi babu nursing home address phone email map directions' },
  { title: 'Website Sitemap & Directory', route: 'sitemap', keywords: 'sitemap directory index all pages navigation' }
];

function handleLiveSearch(query) {
  const resultsContainer = document.getElementById('globalSearchResults');
  if (!query || query.trim() === '') {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const q = query.toLowerCase().trim();
  const filtered = sitePages.filter(p => p.title.toLowerCase().includes(q) || (p.keywords && p.keywords.toLowerCase().includes(q)));
  
  if (filtered.length === 0) {
    resultsContainer.innerHTML = `<div style="padding:16px; color:var(--text-muted); text-align:center;">No matching pages found for "${query}"</div>`;
    return;
  }

  resultsContainer.innerHTML = filtered.map(p => `
    <a href="#${p.route}" class="search-result-item" onclick="closeSearchModal(); navigate('${p.route}');">
      <i class="fa-solid fa-arrow-right" style="color:var(--color-gold); margin-right:8px;"></i> ${p.title}
    </a>
  `).join('');
}

// --- Gallery Filter ---
function filterGallery(category) {
  document.querySelectorAll('.gallery-filter .filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  const container = document.getElementById('galleryContainer');
  if (container) {
    container.style.opacity = '0.5';
    setTimeout(() => { container.style.opacity = '1'; }, 200);
  }
}

// --- Cookie Consent Acceptance ---
function acceptCookies() {
  document.getElementById('cookieConsent').style.display = 'none';
}

// --- Animation & Scroll Listener Helpers ---
function initAnimations() {
  const elements = document.querySelectorAll('.animate-fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// --- Window Scroll & Cursor Event Listeners ---
window.addEventListener('scroll', () => {
  const mainNavbar = document.getElementById('mainNavbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Sticky header glass effect
  if (window.scrollY > 30) {
    if (mainNavbar) mainNavbar.classList.add('scrolled');
  } else {
    if (mainNavbar) mainNavbar.classList.remove('scrolled');
  }

  // Scroll Progress Bar calculation
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  if (scrollProgress) scrollProgress.style.width = progress + '%';

  // Back to top button visibility
  if (window.scrollY > 300) {
    if (backToTopBtn) backToTopBtn.classList.add('visible');
  } else {
    if (backToTopBtn) backToTopBtn.classList.remove('visible');
  }
});

// Custom Cursor Follower Motion
window.addEventListener('mousemove', (e) => {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('customCursorFollower');
  if (cursor && follower) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }
});

// Cursor Hover Expand Effects
document.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || (e.target.classList && e.target.classList.contains('luxury-card'))) {
    document.body.classList.add('cursor-hover');
  } else {
    document.body.classList.remove('cursor-hover');
  }
});

// --- Robust Initial Hash Route Resolution & History Navigation ---
function initApp() {
  initGlobalLinkInterceptor();
  const hash = window.location.hash.replace('#', '').trim();
  if (hash && views[hash]) {
    navigate(hash, true);
  } else {
    navigate('home', true);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

window.addEventListener('hashchange', () => {
  const hash = (window.location.hash.replace('#', '').trim() || 'home').toLowerCase();
  if (views[hash] && hash !== state.currentRoute) {
    navigate(hash, false, true);
  }
});

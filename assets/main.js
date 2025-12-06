// assets/main.js
// Simple site JS: load latest post, gallery, and render blog posts + single post rendering.

document.addEventListener("DOMContentLoaded", function(){
  // set year in footers
  const y = new Date().getFullYear();
  for(let i=1;i<=8;i++){
    const el = document.getElementById("year"+(i===1? "": i));
    if(el) el.textContent = y;
  }
  const yearSingle = document.getElementById("year");
  if(yearSingle) yearSingle.textContent = y;

  // fetch posts
  fetch("assets/posts.json")
    .then(r=>r.json())
    .then(posts=>{
      // homepage latest
      const latestEl = document.getElementById("latest-post");
      if(latestEl && posts.length){
        const p = posts[0];
        latestEl.innerHTML = `
          <div style="display:flex;gap:16px;align-items:center;">
            <div style="flex:1">
              <h3>${escapeHtml(p.title)}</h3>
              <p class="lead">${stripHtml(p.excerpt)}</p>
              <a href="post.html?slug=${encodeURIComponent(p.slug)}" class="cta">Read post</a>
            </div>
            <div style="width:220px">
              <img src="${p.image}" alt="" style="width:100%;border-radius:8px" />
            </div>
          </div>
        `;
      }

      // blog list
      const list = document.getElementById("posts-list");
      if(list){
        list.innerHTML = posts.map(p=>`
          <div class="card blog-item">
           <div class="blog-thumb">
  <img src="${p.image}" alt="" class="img-contain" />
</div>

            <div style="flex:1">
              <h3>${escapeHtml(p.title)}</h3>
              <div class="meta">${escapeHtml(p.date)}</div>
              <p class="lead">${stripHtml(p.excerpt)}</p>
              <a href="post.html?slug=${encodeURIComponent(p.slug)}" class="cta">Read</a>
            </div>
          </div>
        `).join("");
      }

      // gallery sample
      const gallery = document.getElementById("gallery-sample");
      if(gallery){
       // Use actual gallery images for preview instead of blog images
const previewImgs = [
  "assets/images/gallery1.jpg",
  "assets/images/gallery2.jpg",
  "assets/images/gallery3.jpg",
  "assets/images/gallery4.jpg",
  "assets/images/gallery5.jpg",
  "assets/images/gallery6.jpg"
];

gallery.innerHTML = previewImgs.map(src => `
  <img src="${src}" alt="Gallery preview" class="img-contain gallery-img" />
`).join("");


      }

      // FULL GALLERY PAGE
const fullGallery = document.getElementById("gallery");
if(fullGallery){
  const galleryImages = [
    "assets/images/gallery1.jpg",
    "assets/images/gallery2.jpg",
    "assets/images/gallery3.jpg",
    "assets/images/gallery4.jpg",
    "assets/images/gallery5.jpg",
    "assets/images/gallery6.jpg",
    "assets/images/gallery7.jpg",
    "assets/images/gallery8.jpg",
    "assets/images/gallery9.jpg",
    "assets/images/gallery10.jpg",
    "assets/images/gallery11.jpg",
    "assets/images/gallery12.jpg",
    "assets/images/gallery13.jpg",
    "assets/images/gallery14.jpg"
  ];

  fullGallery.innerHTML = galleryImages.map(src => `
  <img src="${src}" alt="Crown Arts Image" class="gallery-img" />
`).join("");

}

// =======================
// EVENTS PAGE HANDLING
// =======================

const eventsUpcoming = [
  {
    title: "Eve’s Rapture",
    date: "Dec 12–14, 2025 • 5:00 PM daily",
    location: "Glover Memorial Hall, Customs Street, Lagos Island",
    image: "assets/images/eves-rapture.jpeg",
    description: "A tale of love, temptation and divine awakening. A theatrical revelation performed by Crown Troupe of Africa and directed by Segun Adefila. (Rated 18+)"
  },  

  // NEW EVENT BELOW

    {
    title: "Eve’s Rapture",
    date: "Dec 12–14, 2025 • 5:00 PM daily",
    location: "Glover Memorial Hall, Customs Street, Lagos Island",
    image: "assets/images/eves-rapture.jpeg",
    description: "A tale of love, temptation and divine awakening. A theatrical revelation performed by Crown Troupe of Africa and directed by Segun Adefila. (Rated 18+)"
  },
  {
    title: "Eve’s Rapture",
    date: "Dec 12–14, 2025 • 5:00 PM daily",
    location: "Glover Memorial Hall, Customs Street, Lagos Island",
    image: "assets/images/eves-rapture.jpeg",
    description: "A tale of love, temptation and divine awakening. A theatrical revelation performed by Crown Troupe of Africa and directed by Segun Adefila. (Rated 18+)"
  }
];

const eventsPast = [
  {
    title: "Theatre Residency Workshop",
    date: "Feb 12, 2025",
    location: "Bariga, Lagos",
    image: "assets/images/gallery3.jpg",
    description: "A 5-day intensive residency for young performers, focusing on movement, discipline, stage expression, and ensemble practice."
  },
  {
    title: "Arugba Live Performance Tribute",
    date: "Dec 2024",
    location: "Ikeja, Lagos",
    image: "assets/images/gallery14.jpg",
    description: "A performance tribute featuring key scenes and reinterpretations from the iconic film *Arugba*."
  },
  {
    title: "Crown Troupe 27th Anniversary",
    date: "Oct 2024",
    location: "Bariga, Lagos",
    image: "assets/images/gallery6.jpg",
    description: "Celebrating the legacy and ongoing impact of one of Nigeria’s most influential theatre movements."
  },
  {
    title: "Crown Arts Street Theatre Parade",
    date: "March 8, 2025",
    location: "Yaba, Lagos",
    image: "assets/images/gallery8.jpg",
    description: "A cultural street parade featuring dance, drums, masks, and physical theatre with strong community interaction."
  },
  {
    title: "Women in Theatre Night – Special Showcase",
    date: "April 1, 2025",
    location: "Terra Kulture, Lagos",
    image: "assets/images/gallery10.jpg",
    description: "Celebrating the diverse voices and talents of Nigerian women in theatre, including drama, poetry, and dance."
  }
];

      // RENDER EVENTS ON events.html
if (window.location.pathname.endsWith("events.html")) {

  const upEv = document.getElementById("upcoming-events");
  const pastEv = document.getElementById("past-events");

  function renderEvents(list, target) {
    target.innerHTML = list.map(ev => `
      <div class="event-card fade-in">
        <img src="${ev.image}" class="event-img" alt="${ev.title}" />
        <div class="event-body">
          <h3>${ev.title}</h3>
          <p class="event-meta">${ev.date} • ${ev.location}</p>
          <p class="event-desc">${ev.description}</p>
        </div>
      </div>
    `).join("");
  }

  renderEvents(eventsUpcoming, upEv);
  renderEvents(eventsPast, pastEv);
}
// =======================
// PRESS PAGE HANDLING
// =======================

const pressItems = [
  {
    title: "Segun Adefila: A Theatre Maestro Par Excellence",
    source: "News Round The Clock",
    date: "2024",
    image: "assets/images/press-pic.png",
    description: "A profile on Segun Adefila’s journey, artistic influence, and enduring legacy in Nigerian theatre.",
    link: "https://newsroundtheclock.com/segun-adefila-a-theatre-maestro-par-excellence/"
  },
  {
    title: "Traditional Dance Cannot Die — Segun Adefila",
    source: "Punch Nigeria",
    date: "2023",
    image: "assets/images/press-pic.png",
    description: "Segun Adefila speaks on the relevance and timelessness of traditional dance in African culture.",
    link: "https://punchng.com/traditional-dance-cannot-die-segun-adefila/"
  },
  {
    title: "Art Influences Every Culture & Civilisation — Segun Adefila",
    source: "Punch Nigeria",
    date: "2022",
    image: "assets/images/press-pic.png",
    description: "A conversation about the unshakable connection between art, society, culture, and civilisation.",
    link: "https://punchng.com/art-influences-every-culture-civilisation-segun-adefila/"
  },
  {
    title: "On Theatre for Social Development: Interview with Segun Adefila",
    source: "Development Diaries",
    date: "2015",
    image: "assets/images/press-pic.png",
    description: "A deep interview exploring how theatre can serve as a tool for social transformation.",
    link: "https://www.developmentdiaries.com/2015/07/on-theatre-for-social-development-an-interview-with-segun-adefila-crown-troupe/"
  },
  {
    title: "Culture Before Coronavirus — by Segun Adefila",
    source: "IBAND Magazine",
    date: "2020",
    image: "assets/images/press-pic.png",
    description: "A written piece by Segun Adefila reflecting on culture, community, and creativity before the pandemic.",
    link: "https://ibandmagazine.wordpress.com/2020/04/18/culture-before-coronavirus-by-segun-adefila/"
  },
  {
    title: "Easter Cantata: Crown Troupe Delivers 'Disloyal Judas'",
    source: "Tribune Online NG",
    date: "2021",
    image: "assets/images/press-pic.png",
    description: "A colourful review of Crown Troupe’s spectacular Easter stage production.",
    link: "https://tribuneonlineng.com/easter-cantata-segun-adefilas-crown-troupe-delivers-spectacular-disloyal-judas/"
  }
];

// RENDER PRESS ITEMS
if (window.location.pathname.endsWith("press.html")) {

  const pressList = document.getElementById("press-list");

  pressList.innerHTML = pressItems.map(item => `
    <div class="press-card fade-in">
      <img src="${item.image}" class="press-img" alt="${item.title}" />
      <div class="press-body">
        <h3>${item.title}</h3>
        <p class="press-meta">${item.source} • ${item.date}</p>
        <p class="press-desc">${item.description}</p>
        <a href="${item.link}" target="_blank" class="press-link">Read More →</a>
      </div>
    </div>
  `).join("");
}

      // if on post.html, show selected post
      if(window.location.pathname.endsWith("post.html")){
        const params = new URLSearchParams(window.location.search);
        const slug = params.get("slug");
        const post = posts.find(x=>x.slug===slug);
        const container = document.getElementById("post-container");
        if(!post){
          if(container) container.innerHTML = `<h2>Post not found</h2><p><a href="blog.html">Back to blog</a></p>`;
        } else {
          container.innerHTML = `
            <h1>${escapeHtml(post.title)}</h1>
            <div class="meta" style="margin-top:8px">${escapeHtml(post.date)}</div>
${post.image ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" class="img-contain post-header-img" />` : ""}

            <div style="margin-top:14px">${post.content}</div>
          `;
        }
      }
    })
    .catch(err=>{
      console.error("Error loading posts.json", err);
    });
});


// MOBILE MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}


// =======================
// LIGHTBOX (Fullscreen Image)
// =======================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

// Open lightbox when gallery images are clicked
document.addEventListener("click", function(e){
  if(e.target.classList.contains("gallery-img")){
    lightboxImg.src = e.target.src;
    lightbox.classList.add("show");
  }
});

// Close when clicking the X
if(lightboxClose){
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });
}

// Close when clicking outside image
if(lightbox){
  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
      lightbox.classList.remove("show");
    }
  });
}

// Close with ESC key
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    lightbox.classList.remove("show");
  }
});

// =======================
// SMOOTH FADE-IN SECTION REVEAL
// =======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// small helpers
function escapeHtml(str){
  if(!str) return "";
  return String(str).replace(/[&<>"']/g, function(s){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]);
  });
}
function stripHtml(html){
  if(!html) return "";
  return html.replace(/<[^>]*>/g, '').slice(0,180) + (html.length>180? "..." : "");
}



const IMAGES = [
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

const GROUPS = [
  {
    title: 'Leadership',
    subtitle: 'The people setting the direction.',
    members: [
      ['FACULTY ADVISORS','Pradeep Sir & Suresh Sir','Faculty Advisors'],
      ['PRESIDENT','Nidhi Shukla','President'],
      ['VICE PRESIDENT','Harish','Vice President'],
      ['SECRETARY GENERAL','Nandhini','Secretary General']
    ]
  },
  {
    title: 'Creative & Design',
    subtitle: 'Ideas become visuals, stories and experiences.',
    members: [
      ['GRAPHIC DESIGN','Nidhi Shukla & Navyaa','Graphic Designer Leads'],
      ['CONTENT','Sneha & Meghana','Content Leads'],
      ['PHOTOGRAPHY','Surya','Photography Lead'],
      ['VIDEOGRAPHY','Shanmukh & Shiva','Videography Leads']
    ]
  },
  {
    title: 'Technology & Digital',
    subtitle: 'Building the systems and digital presence.',
    members: [
      ['TECHNICAL','D. Sathvik','Technical Lead'],
      ['DIGITAL MARKETING','Krithika & Vasavi','Promotions'],
      ['SOCIAL MEDIA','Saikiran','Social Media Lead'],
      ['WEB DESIGN','Nandhini & D. Sathvik','Web Designer Leads']
    ]
  },
  {
    title: 'Community & Growth',
    subtitle: 'Connecting people, partnerships and opportunities.',
    members: [
      ['PR & LOGISTICS','Tejasree & Swapna','PR & Logistics Heads'],
      ['SPONSORSHIP','Abhinay Kalal','Sponsorship Lead'],
      ['OUTREACH','Charan & Bhavana','Outreach Leads'],
      ['DOCUMENTATION','Asrith & Akrusha','Documentation Leads']
    ]
  }
];

let activeIndex = 0;
let isAnimating = false;
let isMobile = window.innerWidth < 640;

const root = document.querySelector('.toonhub-page');
const visuals = [...document.querySelectorAll('.visual-card')];
const title = document.getElementById('groupTitle');
const subtitle = document.getElementById('groupSubtitle');
const memberList = document.getElementById('memberList');

IMAGES.forEach(item => {
  const image = new Image();
  image.src = item.src;
});

function renderMembers() {
  const group = GROUPS[activeIndex];
  title.textContent = group.title;
  subtitle.textContent = group.subtitle;
  memberList.innerHTML = group.members.map(([role,name,desc]) => `
    <div class="member-row">
      <span class="member-role">${role}</span>
      <strong>${name}</strong>
      <small>${desc}</small>
    </div>
  `).join('');
}

function setRoles() {
  const center = activeIndex;
  const left = (activeIndex + 3) % 4;
  const right = (activeIndex + 1) % 4;
  const back = (activeIndex + 2) % 4;

  visuals.forEach((card,index) => {
    card.removeAttribute('data-role');
    if (index === center) card.dataset.role = 'center';
    else if (index === left) card.dataset.role = 'left';
    else if (index === right) card.dataset.role = 'right';
    else if (index === back) card.dataset.role = 'back';
  });
}

function updateBackground() {
  root.style.backgroundColor = IMAGES[activeIndex].bg;
}

function navigate(direction) {
  if (isAnimating) return;
  isAnimating = true;

  activeIndex = direction === 'next'
    ? (activeIndex + 1) % 4
    : (activeIndex + 3) % 4;

  updateBackground();
  setRoles();
  renderMembers();

  setTimeout(() => {
    isAnimating = false;
  }, 650);
}

document.getElementById('prevBtn').addEventListener('click', () => navigate('prev'));
document.getElementById('nextBtn').addEventListener('click', () => navigate('next'));

window.addEventListener('resize', () => {
  isMobile = window.innerWidth < 640;
});

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') navigate('prev');
  if (event.key === 'ArrowRight') navigate('next');
});

setRoles();
renderMembers();
updateBackground();

if (window.lucide) {
  lucide.createIcons();
}

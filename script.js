const navToggle = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('[data-tab]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('[data-tab-panel]').forEach(panel => panel.classList.add('hidden'));
    button.classList.add('active');
    document.querySelector(`[data-tab-panel="${button.dataset.tab}"]`).classList.remove('hidden');
  });
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(item => {
      item.classList.toggle('hidden', filter !== 'All' && item.dataset.category !== filter);
    });
  });
});

const milestoneSelect = document.querySelector('#milestone-select');
const milestonePanel = document.querySelector('#milestone-panel');
const milestones = {
  initialisation: ['November 2025', 'Project Initialisation', 'To be confirmed', 'Project initialisation and research project setup.', 'Initial project activities completed according to the assessment schedule.', 'completed'],
  taf: ['January 2026', 'Topic Assessment Form (TAF)', 'To be confirmed', 'Topic Assessment Form submitted for the research project.', 'The research topic, problem scope, objectives, and initial plan were assessed.', 'completed'],
  proposal: ['March 2026', 'Project Proposal (Presentation and Report)', 'Proposal report: 5% · Presentation: To be confirmed', 'Project proposal presentation and report assessment.', 'The proposed TomatoDoc solution, research gap, and methodology were presented and documented.', 'completed'],
  progress1: ['May 2026 (exact date to be confirmed)', 'Progress Presentation 1', '15%', 'First progress presentation and evaluation.', 'Initial implementation progress, datasets, and model development were reviewed.', 'completed'],
  progress2: ['September 2026 (exact date to be confirmed)', 'Progress Presentation 2', 'To be confirmed', 'Second progress presentation and evaluation.', 'The integrated research application and progress of all system components were reviewed.', 'completed'],
  paper: ['4 September 2026 (ICAC 2026 submission deadline)', 'Research Paper', 'To be confirmed', 'Research paper submission for the ICAC 2026 deadline.', 'The group research paper documents the research contribution, methodology, and results.', 'completed'],
  system: ['Date to be confirmed', 'System Completion', 'To be confirmed', 'Completion of the integrated TomatoDoc system.', 'Final integration, testing, documentation, and deployment activities are in progress.', 'progress'],
  website: ['October 2026', 'Research Portfolio Website', 'To be confirmed', 'Completion of the research portfolio website.', 'The public research showcase website is being prepared with project information and supporting documents.', 'progress'],
  thesis: ['Drafts: October 2026 · Final: Date to be confirmed', 'Thesis (Individual and Group Reports)', 'To be confirmed', 'Preparation and submission of individual and group thesis reports.', 'Draft reports are planned for October 2026, followed by final submission on the confirmed date.', 'progress'],
  viva: ['Date to be confirmed', 'Final Presentation and Viva', 'To be confirmed', 'Final presentation and viva assessment.', 'The completed TomatoDoc system will be demonstrated and evaluated by the assessment panel.', 'upcoming']
};
function updateMilestone(key) {
  const [date, title, marks, description, details, status] = milestones[key];
  milestonePanel.innerHTML = `<div class="hero-meta"><span class="eyebrow">${date}</span><span class="status ${status}">${status === 'progress' ? 'In Progress' : status[0].toUpperCase() + status.slice(1)}</span><span class="pill">Marks: ${marks}</span></div><h3>${title}</h3><p>${description}</p><p class="muted">${details}</p>`;
}
milestoneSelect?.addEventListener('change', event => updateMilestone(event.target.value));

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const body = `Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`;
  window.location.href = `mailto:sivanesangabilan2001@gmail.com?subject=${encodeURIComponent(form.get('subject'))}&body=${encodeURIComponent(body)}`;
});

// DOM elements
const usernameInput = document.getElementById('username-input');
const searchButton = document.getElementById('search-button');
const profileSection = document.getElementById('profile-section');
const reposSection = document.getElementById('repos-section');
const errorMessage = document.getElementById('error-message');
const loadingContainer = document.getElementById('loading-container');
const themeToggle = document.getElementById('theme-toggle');

// GitHub API base URL
const API_BASE_URL = 'https://api.github.com';

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  updateThemeIcon();
});

function updateThemeIcon() {
  const isLightMode = document.body.classList.contains('light-theme');
  themeToggle.innerHTML = isLightMode 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
}

// Initialize theme icon
updateThemeIcon();

// Handle search for GitHub user
searchButton.addEventListener('click', searchUser);
usernameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchUser();
  }
});

async function searchUser() {
  const username = usernameInput.value.trim();
  if (!username) return;

  // Reset previous results and show loading
  clearResults();
  showLoading();

  try {
    const [userData, reposData] = await Promise.all([
      fetchData(`${API_BASE_URL}/users/${username}`),
      fetchData(`${API_BASE_URL}/users/${username}/repos?sort=updated&per_page=6`)
    ]);

    hideLoading();
    displayResults(userData, reposData);
  } catch (error) {
    showError(error);
  }
}

async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  return await response.json();
}

function clearResults() {
  profileSection.innerHTML = '';
  reposSection.innerHTML = '';
  errorMessage.style.display = 'none';
}

function showLoading() {
  loadingContainer.style.display = 'flex';
}

function hideLoading() {
  loadingContainer.style.display = 'none';
}

function showError(error) {
  hideLoading();
  errorMessage.style.display = 'flex';
  console.error('Error fetching data:', error);
}

function displayResults(user, repos) {
  displayUserProfile(user);
  displayUserRepos(repos);
}

function displayUserProfile(user) {
  const profileHTML = `
    <div class="profile-card">
      <img src="${user.avatar_url}" alt="${user.login}" class="profile-avatar">
      <div class="profile-info">
        <h2 class="profile-name">${user.name || user.login}</h2>
        <a href="${user.html_url}" target="_blank" class="profile-username">@${user.login}</a>
        <p>${user.bio || 'No bio available'}</p>
        <p><strong>Followers:</strong> ${user.followers} | <strong>Following:</strong> ${user.following}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
      </div>
    </div>
  `;
  profileSection.innerHTML = profileHTML;
}

function displayUserRepos(repos) {
  if (repos.length === 0) {
    reposSection.innerHTML = '<p>No repositories found.</p>';
    return;
  }

  const reposHTML = repos.map(repo => `
    <div class="repo-card">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      <p>${repo.description || 'No description available'}</p>
      <p><strong>Stars:</strong> ${repo.stargazers_count} | <strong>Forks:</strong> ${repo.forks_count}</p>
    </div>
  `).join('');
  reposSection.innerHTML = reposHTML;
}

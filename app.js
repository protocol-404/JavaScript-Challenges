document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('challenges-container');
    const nav = document.getElementById('level-nav');

    // Create navigation items first
    Object.entries(challenges).forEach(([level, _]) => {
        const navItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#level-${level.toLowerCase()}`;
        link.className = 'px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 whitespace-nowrap';
        link.textContent = `Level ${level}`;
        navItem.appendChild(link);
        nav.appendChild(navItem);
    });

    // Create sections with proper IDs
    Object.entries(challenges).forEach(([level, challengeList]) => {
        const section = document.createElement('section');
        section.id = `level-${level.toLowerCase()}`;
        section.className = 'mb-8 scroll-mt-32'; // Add padding for smooth scroll
        
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-gray-800 mb-4';
        title.textContent = `Level: ${level}`;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

        challengeList.forEach(challenge => {
            const card = createChallengeCard(challenge, level);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });

    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

async function fileExists(filePath) {
    try {
        const response = await fetch(filePath, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

function createChallengeCard(challenge, level) {
    const card = document.createElement('div');
    card.className = 'challenge-card bg-white rounded-lg shadow-md p-6 cursor-pointer relative';
    card.setAttribute('data-challenge-id', challenge.id);

    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    card.appendChild(spinner);

    const contentContainer = document.createElement('div');
    contentContainer.style.opacity = '0';
    contentContainer.style.transition = 'opacity 0.3s ease';

    fileExists(challenge.link).then(exists => {
        if (exists) {
            card.classList.add('file-exists');
        }
        spinner.remove();
        contentContainer.style.opacity = '1';
    });

    const badge = document.createElement('span');
    badge.className = `level-badge level-${level.toLowerCase()} mb-2 inline-block`;
    badge.textContent = level;

    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold text-gray-800 mt-2';
    title.textContent = challenge.title;

    const description = document.createElement('p');
    description.className = 'text-gray-600 text-sm mt-2';
    description.textContent = challenge.description;

    contentContainer.appendChild(badge);
    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
    card.appendChild(contentContainer);

    card.addEventListener('click', () => {
        fileExists(challenge.link).then(exists => {
            if (exists) {
                console.log(`The file exists: ${challenge.title}`);
            } else {
                console.log(`The file does not exist: ${challenge.title}`);
            }
        });

        navigateToChallenge(challenge);
    });

    return card;
}

function navigateToChallenge(challenge) {
    window.location.href = challenge.link;
}

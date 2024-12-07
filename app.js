document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('challenges-container');

    Object.entries(challenges).forEach(([level, challengeList]) => {
        const section = document.createElement('section');
        section.className = 'mb-8';
        
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-gray-800 mb-4';
        title.textContent = `Niveau: ${level}`;
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
    card.className = 'challenge-card bg-white rounded-lg shadow-md p-6 cursor-pointer';
    card.setAttribute('data-challenge-id', challenge.id);

    fileExists(challenge.link).then(exists => {
        if (exists) {
            card.classList.add('file-exists');
        }
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

    card.addEventListener('click', () => {
        
        fileExists(challenge.link).then(exists => {
            if (exists) {
                console.log('The file exists.'+challenge.title);
            } else {
                console.log('The file does not exist.'+challenge.title);
            }
        });

        navigateToChallenge(challenge);
    });

    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

function navigateToChallenge(challenge) {
    window.location.href = challenge.link;
}

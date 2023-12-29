import React from 'react';
import LinkedInLogo from '../assets/source/icons8-linkedin.svg';
import GitHubLogo from '../assets/source/icons8-github-48.svg';


const IconHolder = ({ icon }) => {
    let iconSource;
    let iconLink;

    switch (icon) {
        case 'linkedin':
            iconSource = LinkedInLogo;
            iconLink = 'https://www.linkedin.com/in/taqiyeddine-b/';
            break;
        case 'github':
            iconSource = GitHubLogo;
            iconLink = 'https://github.com/taqiyeddine-b';
            break;
        default:
            iconSource = null;
            iconLink = null;
            break;
    }

    return (
        <div>
            {iconSource && <a href={iconLink}><img src={iconSource} alt="Icon" /></a>}
        </div>
    );
};

export default IconHolder;

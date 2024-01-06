import React from 'react';
import LinkedInLogo from '../assets/source/icons8-linkedin.svg';
import GitHubLogo from '../assets/source/icons8-github-48.svg';
import SdgLogo from '../assets/source/solutiondata_group_logo.jpg';
import DiotaLogo from '../assets/source/diotasoft_logo.jpg';
import IritLogo from '../assets/source/irit_logo.png';

const IconHolder = ({ icon }) => {
    let iconSource;
    let iconLink;
    let iconSize;

    switch (icon) {
        case 'linkedin':
            iconSource = LinkedInLogo;
            iconLink = 'https://www.linkedin.com/in/taqiyeddine-b/';
            break;
        case 'github':
            iconSource = GitHubLogo;
            iconLink = 'https://github.com/taqiyeddine-b';
            break;
        case 'sdg_ai':
            iconSource = SdgLogo;
            iconLink = null;
            iconSize = { width: '48px', height: '48px', borderRadius: '20%' };
            break;
        case 'diota_dl_intern':
            iconSource = DiotaLogo;
            iconLink = null;
            iconSize = { width: '48px', height: '48px', borderRadius: '20%' };
            break;
        case 'irit_ami': case 'irit_audio':
        iconSource = IritLogo;
        iconLink = null;
        iconSize = { width: '48px', height: '48px', borderRadius: '20%' };
        break;
        default:
            iconSource = null;
            iconLink = null;
            break;
    }

    return (
        <div>
            {iconSource && <a href={iconLink}><img src={iconSource} alt="Icon" style={iconSize} /></a>}
        </div>
    );
};

export default IconHolder;

import React from 'react';
import PropTypes from 'prop-types';

const ButtonWithBorderRadius = ({ borderRadius,section,children }) => {
  let borderRadiusStyle;
  let marginStyle;
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
  switch (borderRadius) {
    case 'state1':
      borderRadiusStyle = '15px 0px 0px 15px';
      marginStyle = '0px';
      break;
    case 'state2':
      borderRadiusStyle = '0px 15px 15px 0px';
      marginStyle = '0px';

      break;
    case 'state3':
      borderRadiusStyle = '15px 15px 15px 15px';
      marginStyle = '6px';

      break;
    case 'state4':
        borderRadiusStyle = '0px 0px 0px 0px';
        marginStyle = '0px';

        break;
    default:
      borderRadiusStyle = '0px 0px 0px 0px';
      marginStyle = '0px';

  }

  return (
    <button
      onClick={() => scrollToSection(section)}
      className="vibrant_start"
      style={{ borderRadius: borderRadiusStyle ,margin:marginStyle}}
    >
      {children}
    </button>
  );
};

ButtonWithBorderRadius.propTypes = {
  borderRadius: PropTypes.oneOf(['state1', 'state2', 'state3']).isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonWithBorderRadius;
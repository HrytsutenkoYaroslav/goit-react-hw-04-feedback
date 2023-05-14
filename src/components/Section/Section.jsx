import css from './Section.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={css.paragraph}>{title}</h2>
      {children}
    </>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

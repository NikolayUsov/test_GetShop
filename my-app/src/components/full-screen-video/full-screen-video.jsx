import React from 'react';
import PropTypes from 'prop-types';
import styles from './full-screen-video.module.scss';

function FullScreenVideo({ embed }) {
  return (
    <div className={styles.container}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embed}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

FullScreenVideo.propTypes = {
  embed: PropTypes.string.isRequired,
};

export default FullScreenVideo;

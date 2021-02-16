import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import './VideoPlayer.scss';

const youtubeUrl = 'https://www.youtube.com/watch?v=';

const VideoPlayer = ({ show, onHide, title, videoKey }) => {
  return (
    <div className='video-player'>
      <Modal show={show} onHide={onHide} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter' style={{ color: '#000000', fontWeight: 'bolder' }}>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000000' }}>
          <ReactPlayer className='container-fluid' url={youtubeUrl + videoKey} playing width='100%'></ReactPlayer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

VideoPlayer.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string,
  videoKey: PropTypes.string,
};

export default VideoPlayer;

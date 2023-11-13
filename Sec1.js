import React from 'react';
import ReactPlayer from 'react-player';
import './Sec1.css'
const Sec1 = () => {
  return (
    <div className="sec11" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <div className="god" style={{ textAlign: 'center' }}>
        <h1 id='sectit'>Enjoy on your TV</h1>
        <h3  id='sectitt'>Watch on smart TVs, <br />PlayStation, Xbox, Chromecast,<br /> Apple TV, Blu-ray players and more.</h3>
      </div>
      <div className='video1' >
       <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' id='img1' alt='.'></img>
       <div className='video-container'>
        <ReactPlayer
          url="https://vimeo.com/816731498" // replace with your video URL
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="512px"
          height="336px"
        />
      </div>
      </div>

    </div>
  );
};

export default Sec1;

import React from 'react';
import ReactPlayer from 'react-player';
import './Sec3.css'
const Sec3 = () => {
  return (
   <>
  <div className='okgg'>
  <div className="sec11" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <div className="god" style={{ textAlign: 'center' }}>
        <h1 id='sectito'>Watch everywhere</h1>
        <h3  id='sectitt0'>Stream unlimited movies and TV <br />shows on your phone, tablet, laptop, and TV.</h3>
      </div>
      <div className='video1' >
       <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' id='img1' alt='.'></img>
       <div className='video-container900'>
        <ReactPlayer
          url="https://youtu.be/HZsiToZ8zCI?si=Kio0YvZn73JWGANW" // replace with your video URL
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="350px"
          height="200px"
          border-radius= "30px"
        />
      </div>
      </div>

    </div>
  </div>
   </>
  );
};

export default Sec3;

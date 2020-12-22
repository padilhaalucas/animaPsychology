/* eslint-disable jsx-a11y/accessible-emoji */
import 'react-html5video/dist/styles.css';
import React, { useState, useEffect } from 'react';

import YouTube from 'react-youtube';

function FixedVideo() {
  const [url, setUrl] = useState('');

  useEffect(async () => {
    const response = await fetch('http://127.0.0.1:8005/config/1/');
    const data = await response.json();
    // eslint-disable-next-line prefer-destructuring
    const mainURL = data.mainURL;
    setUrl(mainURL);

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  function youtubeParser(URL) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = URL.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

  const screenWidth = window.screen.width;
  const screenHeigth = window.screen.height;

  const opts = {
    height: `${screenHeigth * 0.675}`,
    width: `${screenWidth * 0.725}`,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="fixedVideoTitle" style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Assista 💕</h1>
      <i />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '0%',
        boxShadow: '2px 2px 2px rgba(113, 92, 112, 0.6)',
        backgroundColor: 'black',
        marginLeft: '13%',
        marginTop: '5%',
        marginBottom: '5%',
        }}
      >
        <YouTube
          videoId={youtubeParser(url)}
          opts={opts}
          onReady={event => event.target.pauseVideo()}
        />
      </div>
    </div>
  );
}

export default FixedVideo;

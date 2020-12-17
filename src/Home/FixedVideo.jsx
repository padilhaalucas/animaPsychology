import 'react-html5video/dist/styles.css';
import React from 'react';

import YouTube from 'react-youtube';

export default class FixedVideo extends React.PureComponent {
  // // eslint-disable-next-line class-methods-use-this
  // _onReady(event) {
  //       // access to player in all event handlers via event.target
  //       event.target.pauseVideo();
  //   }

  render() {
    const { isMobile } = this.props;

    const opts = {
      height: `${isMobile ? '1180' : '580'}`,
      width: `${isMobile ? '480' : '1180'}`,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="fixedVideoTitle" style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Vídeo Fixo</h1>
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
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </div>
      </div>

    );
  }
}

import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page4 from './Page4';
import FixedVideo from './FixedVideo';
import Footer from './Footer';
import './static/style';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    // eslint-disable-next-line react/no-unused-state
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [
        // <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <FixedVideo key="fixedVideo" isMobile={this.state.isMobile} />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" isMobile={this.state.isMobile} />,
        // <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
        <DocumentTitle title="Ânima" key="title" />,
      ]
    );
  }
}
export default Home;

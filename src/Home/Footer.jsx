import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';

export default function Footer() {
  const phoneNumber = '+5555991420880';

  return (
    <footer className="footer page-wrapper">
      <div className="footer-wrap page">
        <Row className="socialMediaRow">
          <h2>Encontre-nos</h2>
          <Row>

            {/* <a href="https://facebook.com" target="_blank">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_1-facebook-256.png"
                alt="facebook link"
                width="32"
                height="32"
              />
            </a> */}

            <a href="https://instagram.com/psidelisbenetti" target="_blank">
              <img
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-256.png"
                alt="instagram link"
                width="32"
                height="32"
                style={{ marginLeft: '10%', marginRight: '10%' }}
              />
            </a>

            <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Estou%20interessado%20nos%20seus%20serviços`} target="_blank">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-256.png"
                alt="whatsapp link"
                width="32"
                height="32"
              />
            </a>

          </Row>
          {/* {
        footer.map((foot, index) => (
          <Col key={index.toString()} md={6} xs={24} className="footer-item-col">
            <div className="footer-item">
              <h2>
                {foot.title}
              </h2>
              {foot.children.map(child => (
                <div key={child.link}>
                  <a target="_blank " href={child.link}>
                    {child.title}
                    {child.desc && (
                    <span
                      style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                    > - {child.desc}
                    </span>)}
                    {child.icon && (
                      <img style={{ marginRight: 16 }} src={child.icon} alt="img" />
                    )}
                  </a>
                </div>))}
            </div>
          </Col>
          ))
      } */}

        </Row>
      </div>
      <div className="footer-bottom">
        <div className="page">
          <Row className="padtech">
            <Col md={4} xs={24} style={{ textAlign: 'center' }}>
              <a
                href="https://padtech.netlify.app"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'center' }}
              >
                Made by <b>PAD Tech ® </b>| 2020
              </a>
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}

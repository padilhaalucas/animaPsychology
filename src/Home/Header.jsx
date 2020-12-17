import React from 'react';
import { Row, Col, Tooltip } from 'antd';
import { header } from './data';

export default function Header(props) {
  // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalYT">Launch modal</button>
  // <div class="modal fade" id="modalYT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  //   <div class="modal-dialog modal-lg" role="document">
  
  //     {/* <!--Content--> */}
  //     <div class="modal-content">
  
  //       {/* <!--Body--> */}
  //       <div class="modal-body mb-0 p-0">
  
  //         <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
  //           <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
  //             allowfullscreen></iframe>
  //         </div>
  
  //       </div>
  //     </div>
  //     {/* <!--/.Content--> */}
  
  //   </div>
  // </div>

  
  const menuChild = header.map((item, i) => {
    const content = item.children.map((child, ii) => (
      <a herf={child.link} key={ii.toString()} className="tip-block">
        <span className="tip-img"><img src={child.img} alt="img" /></span>
        <div className="tip-content">
          {child.title}
          <div>{child.desc}</div>
        </div>
      </a>
    ));

    return (
      <Col key={i.toString()} span={6}>
        <Tooltip title={content} placement="bottom" overlayClassName="header-tip-wrap">
          <span className="nav-title">{item.title}</span>
        </Tooltip>
      </Col>
    );
  });

  return (
    <header {...props}>
      <Row className="nav">
        {menuChild}
      </Row>
    </header>
  );
}

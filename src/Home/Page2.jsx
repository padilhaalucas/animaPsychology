import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';


const pageData = [
  {
    title: 'Missão',
    content: 'Transformar a vida de mulheres que enfrentam dificuldades pessoais, profissionais, em seus relacionamentos amorosos ou familiares. Desenvolver sua autoestima e autoconhecimento, contribuindo para que encontrem seu empoderamento pessoal, assumam o controle de suas vidas e potencializem suas qualidades.',
    links: (<a href="https://antv.alipay.com" target="_blank">Ver&nbsp;&nbsp;<Icon type="right" /></a>),
  },
  {
    title: 'Valores',
    content: 'Atender com ética, transparência e responsabilidade, demonstrando interesse genuíno por cada história de vida. Valorizo, acima de tudo, visualizar o paciente como um todo, como um ser em construção e desconstrução, para além de um possível diagnóstico. Meu foco não é diagnosticar: é compreender, escutar e acolher.',
    links: (<a href="https://antv.alipay.com" target="_blank">Ver&nbsp;&nbsp;<Icon type="right" /></a>),
  },
  {
    title: 'Objetivos',
    content: 'Transmitir a importância da psicoterapia para todas as pessoas e desmistificar os tabus envolvidos, normalizando o cuidar da saúde mental em casa ou qualquer ambiente agradável para realizar uma sessão.  Auxiliar as pessoas a alcançarem seu sucesso pessoal e profissional, conquistar uma boa autoestima/autonomia. ',
    links: (<a href="https://antv.alipay.com" target="_blank">Ver&nbsp;&nbsp;<Icon type="right" /></a>),
  },
  // {
  //   title: 'Big info',
  //   content: 'Descrição big info',
  //   links: (<a href="https://eggjs.org" target="_blank">Ver mais&nbsp;&nbsp;<Icon type="right" /></a>),
  //   full: true,
  //   Bg: Building,
  // },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            {/* <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div> */}
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>Sobre nós</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}

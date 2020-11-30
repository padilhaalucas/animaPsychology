import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { page4 } from './data';
import { Form, FormGroup, FormInput, FormTextarea } from 'shards-react';

export default function Page4() {
  const children = page4.children.map((img, i) => (
    <Col md={6} xs={24} key={i.toString()} className="page4-item">
      <img src={img} alt="img" />
    </Col>
  ));
  return (
    <div className="page-wrapper page4">
      <div className="page">
        <h1>{page4.title}</h1>
        <i />

        <form className="contactForm">
          <FormGroup className="formGroup">
            <label className="formLabel"><b>Nome</b></label>
            <input placeholder="Digite seu nome" className="nameInput" type="text" value="" required />
            {/* <span class="validation-text">Este campo precisa ser preenchido</span>  */}
          </FormGroup>
          <FormGroup className="formGroup">
            <label className="formLabel"><b>Assunto</b></label>
            <input placeholder="Digite aqui o que quer falar..." className="subjectInput" type="text" value="" required />
          </FormGroup>
          <button className="formButton">Enviar</button>
        </form>
        {/* <Form className={"contactForm"}>
            <FormGroup className={"formGroup"}>
              <label className={"formLabel"} htmlFor="#username"><b>Nome</b></label>
              <FormInput className={"nameInput"} placeholder="Digite seu nome" />
            </FormGroup>
            <FormGroup className={"formGroup"}>
              <label className={"formLabel"} htmlFor="#password"><b>Motivo</b></label>
              <FormTextarea className={"subjectInput"} type="password" placeholder="Digite aqui o assunto" />
            </FormGroup>
          </Form> */}


        {/* <OverPack playScale="0.3">
          <QueueAnim
            component={Row}
            className="page4-item-wrapper"
            key="item"
            leaveReverse
            type="bottom"
          >
            {children}
          </QueueAnim>
        </OverPack> */}
      </div>
    </div>
  );
}

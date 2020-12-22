/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { page4 } from './data';
import { FormGroup, Form, FormInput, FormTextarea, Button } from 'shards-react';

export default function Page4() {
  return (
    <div className="page-wrapper page4">
      <div className="page">
        <h1>{page4.title}</h1>
        <i />

        <Form className="contactForm">
          <FormGroup className="formGroup">
            <label className="formLabel" htmlFor="#username"><b>Nome</b></label>
            <FormInput className="nameInput" placeholder="Digite seu nome" />
          </FormGroup>
          <FormGroup className="formGroup">
            <label className="formLabel"><b>Email</b></label>
            <FormInput className="nameInput" placeholder="Digite seu email" />
            {/* <span class="validation-text">Este campo precisa ser preenchido</span>  */}
          </FormGroup>
          <FormGroup className="formGroup">
            <label className="formLabel" htmlFor="#password"><b>Motivo</b></label>
            <FormTextarea className="subjectInput" type="text" placeholder="Digite aqui o assunto" />
          </FormGroup>
          <Button outline theme="secondary">
            Secondary
          </Button>
        </Form>


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

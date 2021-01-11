/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { page4 } from './data';
// eslint-disable-next-line import/first
import { FormGroup } from 'shards-react';

export default function Page4() {
  return (
    <div className="page-wrapper page4">
      <div className="page">
        <h1>{page4.title}</h1>
        <i />
        {/* eslint-disable-next-line no-useless-concat */}
        <form method="post" encytype="text/plain" className="contactForm">
          <FormGroup className="formGroup">
            <label className="formLabel" htmlFor="#username"><b>Nome</b></label>
            <input type="text" name="" id="name" className="nameInput" placeholder="Digite seu nome" />
          </FormGroup>
          <FormGroup className="formGroup">
            <label className="formLabel"><b>Email</b></label>
            <input type="text" name="" className="nameInput" placeholder="Digite seu email" />
            {/* <span class="validation-text">Este campo precisa ser preenchido</span>  */}
          </FormGroup>
          <FormGroup className="formGroup">
            <label className="formLabel" htmlFor="#password"><b>Motivo</b></label>
            <input type="text" id="subject" style={{ marginBottom: '5%', height: '20vh' }} name="Assunto" className="nameInput" placeholder="Digite aqui o assunto" />
          </FormGroup>
          <a
            style={{
              backgroundColor: 'rgba(137, 13, 141, 0.7)',
              border: 'double',
              borderRadius: '6%',
              width: '25%',
              boxShadow: '1px 1px 5px rgba(255, 255, 255, 0.7)',
              color: 'white',
              height: '8%',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              fontSize: '20px',
            }}
            href="mailto:deanabenetti@gmail.com"
            type="submit"
            value="Submeter"
          >
            Submeter
          </a>
        </form>
      </div>
    </div>
  );
}

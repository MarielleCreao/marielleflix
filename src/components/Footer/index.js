import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/mariellecreão">
        <img className="Logo" src={Logo} alt="MarielleFlix logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a  Imersão React da Alura/ 2020.<br/>
        Para saber mais contacte-me pelo
        {' '}
        <a href="https://www.linkedin.com/in/mariellecreão">
         Linkedin
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

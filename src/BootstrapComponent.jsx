import React from 'react';
import {Modal, Button, Dialog, Header, Body, Footer} from 'react-bootstrap';
import HeaderBackground from './img/header.jpg';

const ModalInstance = (
  <div className="static-modal" style={ sectionStyle }>
    Hello world
  </div>
);

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { HeaderBackground } + ")"
};


export default ModalInstance;

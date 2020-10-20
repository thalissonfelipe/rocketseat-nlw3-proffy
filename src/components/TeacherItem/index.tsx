import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img src='https://avatars2.githubusercontent.com/u/29899637?s=400&v=4' alt='Avatar' />
        <div>
          <strong>Thalisson Felipe</strong>
          <span>Química</span>
        </div>
      </header>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /><br />
        Magnam, ex harum.  Accusamus, hic omnis? Illum nisi dolor error, accusantium, vel voluptates alias, 
        totam nesciunt minima officia veritatis sequi nemo laboriosam.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato.
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

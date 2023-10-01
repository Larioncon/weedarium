import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import ModalImage from 'react-modal-image';
import './Home.css';
import img1 from './../../images/1amf.jpg'
import img2 from './../../images/2dmet.jpg'
import img3 from './../../images/3weed.jpg'
import img4 from './../../images/4mdma.jpg'
import img5 from './../../images/5lsd.jpg'
import img6 from './../../images/6coc.jpg'
import img7 from './../../images/7mef.jpg'
const tg = window.Telegram.WebApp;

export default function Home() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];
  // Function to call showPopup API
  function showPopup() {
    tg.showPopup(
      {
        title: "Связь с оператором",
        message: 'Для связи с нашим оператором, пожалуйста, нажмите кнопку "Перейти к чату".',
        buttons: [
          { id: "link", type: "default", text: "Перейти к чату" },
          { type: "cancel" },
        ],
      },
      function (btn) {
        if (btn === "link") {
          tg.openTelegramLink("https://t.me/jenkinsot");
        }
      }
    );
  }

  // Function to toggle main TWA button
  function toggleMainButton() {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }
  return (
    <section className='home'>
      <div className="container">
      <h1 className="home__heading">💥 Paды видеть Bac!</h1>
      <p className="home__text">Продажи ведутся в ежедневном режиме.<br /> Мы стapaeмся для Вас!
      Ознакомьтесь <br /> с ассортиментом и ценами.</p>
      {images.map((image, index) => (
          <ModalImage
            key={index}
            className='home__image'
            small={image} // Маленькое изображение для предварительного просмотра
            large={image} // Увеличенное изображение
            alt={`img${index + 1}`} // Присвойте уникальный альтернативный текст
            hideZoom={false} // Скройте кнопку увеличения, если не нужна
          />
        ))}
      <button onClick={showPopup} className="home__buy-btn">Купить</button>
      </div>
    </section>
  )
}

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
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
   
  // Function to call showPopup API
  function showPopup() {
    tg.showPopup(
      {
        title: "Связь с оператором",
        message: 'Нажмите "перейти", чтобы перейти в чат.',
        buttons: [
          { id: "link", type: "default", text: "перейти" },
          { type: "cancel" },
        ],
      },
      function (btn) {
        if (btn === "link") {
          tg.openLink("https://t.me/riggs8");
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
      <img className="test" src={img1} alt="img" />
      <button onClick={showPopup} className="home__buy-btn">Купить</button>
      </div>
    </section>
  )
}

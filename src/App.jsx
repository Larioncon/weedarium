import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Outletos } from "./components/Outletos/Outletos";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Testimonials from "./pages/Testimonials/Testimonials";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  useEffect(() => {
    // Обработчик события при изменении темы в Telegram
    tg.onEvent('themeChanged', function() {
      document.documentElement.className = tg.colorScheme;
    });

    // Установка параметров главной кнопки
    tg.MainButton.setParams({
      text: 'Связь с оператором'
    });

    // Обработчик нажатия на главную кнопку
    tg.MainButton.onClick(function () {
      tg.openLink('https://t.me/riggs8');
    });

    // Показ главной кнопки
    tg.MainButton.show();
  }, [tg]);

  useEffect(() => {
    tg.onEvent('themeChanged', function() {
      document.documentElement.className = tg.colorScheme;
      document.body.setAttribute('style', '--bg-color:' + tg.backgroundColor); // Установка стиля фона
    });
  }, [tg]); 


  return (
    <>
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Outletos />}>
          <Route index element={<Home />} />
          <Route path="testimonals" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <div id="viewport"></div>
      </div>
    </>
  );
}

export default App;

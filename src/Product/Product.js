import './style.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import four_photo from './four_photo.jpg'
import ON1_resized from './Анастасия-22_ON1_resized.jpg'
import ON2_resized from './Анастасия-42_ON1_resized.jpg'
import On3_resized from './Анастасия-44_ON1_resized.jpg'
import ReactWhatsapp from 'react-whatsapp';


export const Product = () => {

    return(
        <div className='Product_box' id='Price_anchor'>

            <div className='Abaut_zagalovok'>
                <h1>Мои продукты и цены</h1>
            </div>


            <div className='carausel_Product'>

            <Carousel className='Carousel'>
                <Carousel.Item>
                    <img className='img_slide' src={On3_resized} width='100%' alt='' height='550px'/>
                    <h4>Марафон 10 дней от страхов к действию</h4>
                    <p>Вы увидите свои страхи внутри себя и найдете пути решения, которые помогут их устронить. Марафон с целью поддержки, желания дойти с своей цели и сделать свои первые шаги для реализации к ней</p>
                    <p>1 990 рублей</p>
                    <ReactWhatsapp className='button_Product' number='9632823883' message='Здравствуйте, Анастасия, я хочу в марафон'>Нажми</ReactWhatsapp>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img_slide' src={four_photo} width='100%' alt='' height='550px'/>
                    <h4>Сессия "Спринт к цели</h4>
                    <p>Одна коучинговая сессия по скайпу или зуму, вщ время которой вы сможете поставить вместе со мной краткосрочную цель и получить план его достижений</p>
                    <p>5 000/60 минут</p>
                    <ReactWhatsapp className='button_Product' number='9632823883' message='Здравствуйте, Анастасия, я хочу пройти сессию "Спринт к цели"'>Нажми</ReactWhatsapp>
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img_slide' src={ON1_resized} alt='' width='100%' height='550px'/>
                    <h3>3 ключа к успеху</h3>
                    <p>Программа для экспертов, которые хотят увеличить доход, увидеть свои сильные</p>
                    <p>стороны для их реализации и создать новый продукт</p>
                    <ReactWhatsapp className='button_Product' number='9632823883' message='Здравствуйте, Анастасия'>Подробнее</ReactWhatsapp>
                </Carousel.Item>
            </Carousel>

            <div className='Lila_play'>
                <img className='img_slide' src={ON2_resized} alt='' width='420px'/>
                <h3>Игра лила</h3>
                <p>Игра ЛИЛА - самопознание на большом поле оффлайн и онлайн. Одна игра заменит годы работы с психологом</p>
                <p>Лила - это про жизнь</p>
                <p>Лила:</p>
                <p>- Покажет, что мешает достичь той или иной цели.</p>
                <p>- Подскажет, как от этого избавиться и на что обратить внимание.</p>
                <p>- Поможет увидеть слабые зоны и совершить квантовый скачок в жизни</p>
                <p>10 000 рублей</p>
                <ReactWhatsapp className='button_Product' number='9632823883' message='Здравствуйте, Анастасия, я хочу сыграть в игру'>Хочу Сыграть</ReactWhatsapp>
            </div>

            </div>

        </div>
    )
}
import './style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Certificate_one from './Photos/Certificate_one.jpg'
import Certificate_two from './Photos/Certificate_two.PNG'
import Certificate_three from './Photos/Certificate_three.PNG'
import Certificate_four from './Photos/Certificate_four.PNG'
import diploma_img from './Photos/diploma_one.PNG'


export const MyAchievements = () => {

    const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1324,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
    };

    return(
        <div className='conteiner_MyAchievements' id='Achievementst_anchor'>

            <div className='conteiner'></div>

            <div className='Abaut_zagalovok'>
                <h1 className='Zagalovok_MyAchievements'>Мои достижения</h1>
            </div>

            <div className='test_two'>

                <Slider {...settings}>
                    <div>
                        <img className='img_Achievements' src={Certificate_one} alt='' width='500px' height='350px'/>
                    </div>
                    <div>
                        <img className='img_Achievements' src={Certificate_two} alt='' width='500px' height='350px'/>
                    </div>
                    <div>
                        <img className='img_Achievements' src={Certificate_three} alt='' width='500px' height='350px'/>
                    </div>
                    <div>
                        <img className='img_Achievements' src={Certificate_four} alt='' width='500px' height='350px'/>
                    </div>
                    <div>
                        <img className='img_Achievements' src={diploma_img} alt='' width='500px' height='350px'/>
                    </div>
                </Slider>
            </div>

        </div>
    )
}
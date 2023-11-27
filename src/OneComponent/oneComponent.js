import './style.css'
import seven_photo from './OneComponent.JPG'
import ReactWhatsapp from 'react-whatsapp';

function OneComponent() {

    return(
        <div className='conteiner_one'>

            <div className='conteiner_two'>
                <h1 className='h1'>Коуч-психолог Анастасия</h1>
                <h2 className='h2'>Начните свой путь уже сегодня!</h2>
                <ReactWhatsapp className='button' number="9632823883" message="Здравствуйте, Анастасия">Записаться</ReactWhatsapp>
            </div>

            <div className='conteiner_three'>
                <img className='img_oneConteiner' src={seven_photo} alt='seven_photo' width='400px'/>
            </div>
        </div>
    )
}

export default OneComponent
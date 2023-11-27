import './style.css'
import one_photo from './one_photo.jpg'

export const Abaut = () => {
    return(
        <div className='Abaut_conteiner' id='Abaut_anchor'>


            <div className='Abaut_zagalovok'>
                <h1>Обо мне</h1>
            </div>


            <div className='Abaut'>

                <div className='abaut_photo_text'>
                    <img className='img_abaut' src={one_photo} alt='' width='400px'/>
                    <h4 className='Abaut_text_one'>Привет!  Меня зовут Анастасия Будённая, твой проводник в счастливую жизнь.✨</h4>
                    <div className='Abaut_text_two'>Я коуч-психолог по самореализации. Вот уже 6 лет</div>
                    <div className='Abaut_text_two'>меняю мышление людей через прошлое-настоящее</div>
                    <div className='Abaut_text_two'>и игропрактики мои клиенты находят путь к себе. ❤️</div>
                </div>

                <div>
                    <div className='h2_abaut'> 
                        <h2>Помогу вам:</h2>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'>Поверить в себя и свои силы </p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'>Преодолеть синдром самозванца</p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'> Упаковать вашу экспертность </p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'> Сформировать продукты и настроить воронку продаж </p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'> Научиться зарабатывать деньги, ведя свой бизнес </p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'> Проработать установки бедности </p>
                    </div>
                    <div className='test'>
                        <p className='Abaut_aid'> Раскрыть свой талант </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
import './style.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import iconEmail from './Photos/free-icon-message-5249273.png'
import iconTelegram from './Photos/telegram (1).png'
import iconWhatsapp from './Photos/whatsapp (1).png'
import iconInsta from './Photos/instagram.png'

export const LegalInformationAndSocialMedia = () => {
    return(
        <div className='LegalInformationAndSocialMedia_conteiner'>

            <div className='conteiner_icon'> 
                <Router>
                    <a href="mailto:rogozyanova.a@mail.ru" className='icon'><img src={iconEmail} alt='' width='50px'/></a>
                    <Link to='https://t.me/Anastasia_Budennaya' className='icon'><img src={iconTelegram} alt='' width='50px'/></Link>
                    <Link to='https://wa.me/79632823883?text=Пиши скорее!' className='icon'><img src={iconWhatsapp} alt='' width='50px'/></Link>
                    <Link to='https://instagram.com/anastasia__budennaya?igshid=YTQwZjQ0NmI0OA==' className='icon'><img src={iconInsta} alt='' width='50px'/></Link>
                </Router>
            </div>

            <div className='urInfa'>
                <h2>ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h2>
                <div>ИП Будённая Анастасия Сергеевна</div>
                <div>‌ИНН 091706841460</div>
                <div className='agrees_nastia'>‌Адрес: г.Краснодар</div>
                <div>‌Режим работы: пн-пт с 09.00 до 18.00</div>
            </div>

            <div className='stipulation'>
                <Router>
                    <Link className='color_btn' to='https://docs.google.com/forms/d/e/1FAIpQLSeo5ucI1oVaoowxd-e6y2VcC9duB0pdbVllINKun9IAgOa7Ug/viewform'>Политика конфиденциальности</Link>
                </Router>
            </div>

            <div className='stipulation'>
                <Router>
                    <Link className='color_btn' to='https://docs.google.com/forms/d/e/1FAIpQLSegsO1XYhI8FjRjLnkSNbqFKCbbD9YSNGt2y4azpA0E7NxDhw/viewform'>Согласие на рекламную и информационную рассылку</Link>
                </Router>
            </div>

            <div className='stipulation'>
                <Router>
                    <Link className='color_btn' to='https://docs.google.com/forms/d/1LNJZF38N_0E9QskedOktoCcWggbsqE0gPIXlb3t-ZzM/viewform?edit_requested=true'>Договор оферты</Link>
                </Router>
            </div>

            <div className='auter'>
                <Router>
                    <Link className='color_autor' to='https://t.me/zxcmot'>Рогозянов Мавей: </Link>
                    <div className='color_autor_two'>©2023</div>
                </Router>
            </div>
        </div>
    )
}
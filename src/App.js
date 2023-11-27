import { Abaut } from './Abaut/Abaut';
import './App.css';
import { LegalInformationAndSocialMedia } from './LegalInformationAndSocialMedia/LegalInformationAndSocialMedia';
import { MyAchievements } from './My_achievements/MyAchievements';
import OneComponent from './OneComponent/oneComponent';
import { Product } from './Product/Product';
import Zagalovok from './zagalovok/zagalovok';


function App() {
  return (
    <div>
      <div>
        <Zagalovok/>
        <OneComponent/>
        <Abaut/>
        <Product/>
        <MyAchievements/>
        <LegalInformationAndSocialMedia/>
      </div>
    </div>
  );
}

export default App;

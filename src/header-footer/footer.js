import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import Profile from './footer/profile-contact/profile';
import Datuak from './footer/datuak';
import Formulario from './footer/formulario';



const Footer = () => {
  const { t, i18n } = useTranslation();

  const [activeSection, setActiveSection] = useState('Profile');

  return (
    <div className="space-x-4 w-full p-16 bg-primary dark:bg-dark md:flex-row">
      
      {activeSection === 'Profile' && <Datuak />}
      {activeSection === 'Contact' && <Formulario />}

      <div className="flex flex-col md:flex-row items-center text-center justify-between mt-16 text-neutral-700 dark:text-gray-300 ">
        <div className="w-1/4 text-center mb-8">
          <p>{t('datuak:desarrollado')}</p>
          <div className="space-x-4">
            <a href="#">© 2024</a>
            <a href="#">Data Privacy</a>
            <a href="#">Imprint</a>
          </div>
        </div>
       
        <div className="w-1/4">
          <Profile onActiveChange={setActiveSection} />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default Footer;

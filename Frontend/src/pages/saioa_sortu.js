import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import { Link } from 'react-router-dom';
import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';

import SendButom from '../components/bottons/sendBotton';
import BackButtonLittle from '../components/bottons/backButtomLittle';

import IpAPI from '../config/ipAPI';

function Saioa_sortu() {
  const { t } = useTranslation();

  // Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [year, setYear] = useState('');
  const [img, setImg] = useState('');

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert(t('saioa_sortu:passwordMismatch'));
      return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
      DNI: dni,
      name,
      secondName: surname,
      email,
      password,
      password_confirmation: confirmPassword,
      year,
      img,
    };

    // Aquí puedes enviar los datos a un servidor, por ejemplo:
    fetch(`${IpAPI}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Formulario enviado correctamente:', data);
        // Realizar alguna acción después de enviar (e.g., redirigir al usuario)
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

  return (
    <>
      <div className="container flex justify-center erdian">
        <div className="flex flex-col dark:bg-dark bg-primary p-6 m-10 w-96 rounded-lg text-center border-black dark:border-transparent border-2">
          <div className="w-full flex">
            <div className="w-1/2">
              <BackButtonLittle to="/" src="/img/icons/arrow-left.svg" />
            </div>
            <div className="w-1/2 flex flex-row space-x-4 justify-end">
              <LanguageSelector className="w-1/2" changeLanguage={changeLanguage} />
              <DarkModeToggle className="w-1/2" />
            </div>
          </div>
          <p className="font-semibold text-2xl my-5 dark:text-white uppercase">{t('menu:Saioa_sortu')}</p>
          <form className="flex flex-col text-left" onSubmit={handleSubmit}>
            <label className="font-semibold dark:text-white">{t('saioa_sortu:izena')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:abizena')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:nan')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="text"
              maxLength={9}
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:email')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:pasahitza')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:pasahitza_ber')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label className="font-semibold dark:text-white">{t('saioa_sortu:fecha_nacimiento')}</label>
            <input
              className="mb-2 dark:border-primary border-black border-2 rounded-lg"
              type="date"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
            <label className="font-semibold hidden dark:text-white">{t('saioa_sortu:imagen')}</label>
            <input
              className="mb-2 hidden dark:border-primary border-black border-2 rounded-lg"
              type="url"
              value={img}
              onChange={(e) => setImg('/public/img/animal-approve-cat-svgrepo-com.svg')}
              placeholder="URL de la imagen"
            />
            {/* <input
              className="bg-black text-white mt-2 p-2 rounded-lg"
              type="submit"
              value={t('saioa_sortu:input')}
            /> */}
            <SendButom value={t('saioa_sortu:input')} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Saioa_sortu;

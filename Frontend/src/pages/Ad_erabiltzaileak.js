import LanguageSelector from '../header-footer/header/desplegable/lenguageSelector';
import DarkModeToggle from '../header-footer/header/dark-light/dark';
import { useTranslation } from 'react-i18next';
import i18n from '../118n/menu';
import React, { useState, useEffect } from "react";
import BackButton from '../components/bottons/backBotom';
import { Link } from 'react-router-dom';
import IpAPI from "./../config/ipAPI";

function Ad_erabiltzaileak() {
    const { t, i18n } = useTranslation();
    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);  // Cambia el idioma
      };
  

    return (
        <>
            <div className='w-full container flex justify-center'>
                <div className='flex flex-col dark:bg-dark bg-primary p-6 m-10 w-full rounded-lg items-center text-center justify-center border-black dark:border-transparent border-2'>
                    <div className='w-full flex'>
                        <BackButton targetPage="/Ad_menu" width={20} />
                        <div className='w-11/12 flex flex-row space-x-4 justify-end'>
                            <LanguageSelector className='w-1/2' changeLanguage={changeLanguage} />
                            <DarkModeToggle className='w-1/2' />
                        </div>
                    </div>
                    <p className='w-full font-semibold text-2xl my-5 dark:text-white uppercase'>Notiziak</p>
                    <div className='w-full flex flex-col text-left' id='notiziak'>
                        <Link to={"/Ad_notiziak"} className='flex flex-row ml-2 w-44 p-1 mb-5 items-center bg-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95'>
                            <img src='./img/icons/profil/plus_black.svg' className='size-5 mr-3' />
                            <p className='font-bold font-ubuntu'>Sortu Iragarki bat</p>
                        </Link>

                        <div  className='flex flex-row dark:bg-primary bg-dark p-2 mb-5 rounded-3xl justify-between'>
                            <table className='w-full  border-collapse'>
                                <tr className='text-center w-full'>
                                    <td className='w-1/5 text-white dark:text-black border-lime-300'>Izena Abizena</td>
                                    <td className='w-1/5 text-white dark:text-black border-x-3 border-lime-300'>Email</td>
                                    <td className='w-1/5 text-white dark:text-black border-x-3 border-lime-300'>NAN</td>
                                    <td className='w-1/5 text-white dark:text-black  border-lime-300'>Urtea</td>
                                </tr>
                                <tr className='text-center w-full'>
                                    <td className='w-1/5 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                    <td className='w-1/5 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                    <td className='w-1/5 text-white dark:text-black border-x-3 border-y-3 border-lime-300'>X</td>
                                    <td className='w-1/5 text-white dark:text-black border-y-3 border-lime-300'>X</td>
                                </tr>


                                
                            </table>
                           
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Ad_erabiltzaileak;
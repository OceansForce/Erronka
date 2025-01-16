import i18n from './../../118n/menu';
import { useTranslation } from 'react-i18next';

function Anim_Gald_BODY() {
    
    const { t, i18n } = useTranslation();
    
    // Función para cambiar el idioma
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);  // Cambia el idioma
    };
    return (
      <>
        <div className="w-full lg:w-4/5 flex flex-col h-full my-10 justify-center">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                <div className="w-5/6 lg:w-2/4">
                    <img src="./img/image.png" className="w-full rounded-lg"/>
                </div>

                <div className=" w-5/6 lg:w-2/4 flex flex-col ml-4">
                    <div className="w-full flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/3 flex flex-row items-center">
                            <img src="./img/icons/animals/adopta_perro.gif" className="dark:invert "/>
                            <p className="mr-2 text-5xl font-ubuntu text-black dark:text-white">LUR</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <p className="ml-5 mt-10 text-base font-ubuntu text-black dark:text-white" >Jabea:</p>

                        <div className="flex flex-col w-full mt-5 ">
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-full ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Non galdu da: X</p>
                            </div>

                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Sexua: X</p>
                                <p className="w-2/4 ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Arraza: X</p>
                            </div>
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Jaiotze data: X</p>
                                <p className="w-2/4 ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Sexua: X</p>
                            </div>
                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-full ml-5  text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">Sexua: X</p>
                            </div>

                            <div className="flex flex-row w-full justify-between mt-3">
                                <p className="w-full ml-5 text-base font-ubuntu text-black dark:text-white bg-primary dark:bg-dark p-4 rounded-2xl">
                                Sexua: <br/>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Anim_Gald_BODY;
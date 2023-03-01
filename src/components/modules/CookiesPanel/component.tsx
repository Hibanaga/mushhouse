import { FunctionComponent, useEffect } from 'react';

import { Props } from './index';

import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const config = {
    current_lang : 'en',

    onChange: () => {
        // TODO: Waiting for google Analytics
        // if (isExistGtag()) window?.['gtag']('consent', 'update', {
        //     ad_storage: 'denied',
        //     analytics_storage: cookieconsent.allowedCategory('analytics') ? 'granted' : 'denied',
        //     functionality_storage: 'denied',
        //     personalization_storage: 'denied',
        //     security_storage: 'granted',
        //     wait_for_update: 500,
        // });
        // Tracking.event('cookie_consent_update', {});
    },

    onAccept: () => {
        // TODO: Waiting for google Analytics
        // if (isExistGtag()) window?.['gtag']('consent', 'update', {
        //     ad_storage: 'denied',
        //     analytics_storage: cookieconsent.allowedCategory('analytics') ? 'granted' : 'denied',
        //     functionality_storage: 'denied',
        //     personalization_storage: 'denied',
        //     security_storage: 'granted',
        //     wait_for_update: 500,
        // });
        // Tracking.event('cookie_consent_update', {});
    },

    gui_options: {
        consent_modal : {
            layout : 'cloud',               // box/cloud/bar
            position : 'bottom center',     // bottom/top + left/right/center
            transition: 'slide',             // zoom/slide
        },
        settings_modal : {
            layout : 'box',                 // box/bar
            // position : 'left',           // left/right
            transition: 'slide',             // zoom/slide
        },
    },

    languages : {
        en : {
            consent_modal : {
                title :  '',
                description : 'Nasz Serwis wykorzystuje pliki cookies. Serwis wykorzystuje także pliki cookies podmiotów trzecich w celu korzystania z narzędzi analitycznych czy marketingowych. Czy wyrażasz zgodę na korzystanie z innych niżniezbędne plików cookies opisanych w Polityce Prywatności?',
                primary_btn: {
                    text: 'Wyrażam zgodę',
                    role: 'accept_all',  //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Chce zdecydować',
                    role : 'settings',   //'settings' or 'accept_necessary'
                },

            },
            settings_modal : {
                title : 'Ustawienia plików cookie',
                save_settings_btn : 'Zapisz ustawienia',
                accept_all_btn : 'Zaaceptuj wszystkie zgody',
                close_btn_label: 'Zamknij',
                blocks : [
                    {
                        title : 'Niezbędne',
                        description: 'Korzystanie z plików cookie oznaczonych jako niezbędnych konieczne jest dla prawidłowego funkcjonowania Serwisu. Niezbędne pliki cookies są instalowane w szczególności na potrzeby zapamiętywania sesji logowania lub wypełniania formularzy, a także w celach związanych ustawieniem opcji prywatności.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true,
                        },
                    }, {
                        title : 'Funkcjonalne',
                        description: 'Funkcjonalne pliki cookie zapamiętują i dostosowują Serwis do wyborów dokonanych przez Użytkownika. Brak zgody może powodować, że Serwis nie będzie działał prawidłowo',
                        toggle : {
                            value : 'functions',
                            enabled : false,
                            readonly: false,
                        },
                    }, {
                        title : 'Analityczne',
                        description: 'Korzystanie z plików cookie oznaczonych jako analitycznych ma na celu sprawdzenie liczby wizyt i źródeł ruchu w Serwisie. Pliki te pozwalają badać statystki i poprawiać wydajność Serwisu. Jeśli Użytkownik nie zezwoli na stosowanie tych plików cookie, Administrator nie będzie wiedzieć, że Użytkownik odwiedził Serwis.',
                        toggle : {
                            value : 'analytics',
                            enabled : false,
                            readonly: false,
                        },
                    },
                ],
            },
        },
    },
};
const LayoutCookiesPanel: FunctionComponent<Props> = () => {
    useEffect(() => {
        const element = document.getElementById('cc--main');
        if (element) {
            element  && element.remove();
            window.initCookieConsent().run(config as UserConfig);
        } else {
            window.initCookieConsent().run(config as UserConfig);
        }
    }, []);

    return null;
};

export default LayoutCookiesPanel;

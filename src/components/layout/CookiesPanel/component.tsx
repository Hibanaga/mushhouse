import { FunctionComponent, useEffect } from 'react';

import { Props } from './types';

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
                description : 'Nasza strona internetowa wykorzystuje pliki cookies. Strona korzysta również z plików cookies podmiotów trzecich w celach analitycznych lub narzędzi marketingowych. Czy zgadzasz się na wykorzystywanie plików cookies innych niż podstawowe, opisanych w Polityce Prywatności?',
                primary_btn: {
                    text: 'Zgadzam się.',
                    role: 'accept_all',  //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Szczegóły',
                    role : 'settings',   //'settings' or 'accept_necessary'
                },

            },
            settings_modal : {
                title : 'Ustawienia plików cookie',
                save_settings_btn : 'Zapisz ustawienia',
                accept_all_btn : 'Akceptacja wszystkich umów',
                close_btn_label: 'Zamknij',
                blocks : [
                    {
                        title : 'Wymagane',
                        description: 'Stosowanie plików cookies oznaczonych jako niezbędne jest konieczne do prawidłowego funkcjonowania Serwisu. Niezbędne pliki cookies ustawiane są m.in. w celu zapamiętania sesji logowania lub wypełniania formularzy oraz w celach związanych z określeniem ustawień prywatności.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true,
                        },
                    }, {
                        title : 'Funkcjonalne',
                        description: 'Funkcjonalne pliki cookies zapamiętują i dostosowują Stronę do wyborów dokonanych przez Użytkownika. Brak zgody może spowodować, że Strona nie będzie działać prawidłowo.',
                        toggle : {
                            value : 'functions',
                            enabled : false,
                            readonly: false,
                        },
                    }, {
                        title : 'Analityczne',
                        description: 'Wykorzystanie plików cookies oznaczonych jako analityczne ma na celu sprawdzenie liczby odwiedzin i źródeł ruchu na Stronie internetowej. Te pliki cookies pozwalają badać statystyki i poprawiać działanie Strony. Jeżeli Użytkownik nie wyrazi zgody na wykorzystanie tych plików cookies, Administrator nie będzie wiedział, że Użytkownik odwiedził Stronę.',
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

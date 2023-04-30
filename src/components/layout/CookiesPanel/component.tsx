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
                description : 'Наш веб-сайт использует файлы cookie. На сайте также используются файлы cookie третьих лиц для использования аналитических или маркетинговых инструментов. Согласны ли вы с использованием неосновных файлов cookie, описанных в Политике конфиденциальности?',
                primary_btn: {
                    text: 'Я согласен',
                    role: 'accept_all',  //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Подробности',
                    role : 'settings',   //'settings' or 'accept_necessary'
                },

            },
            settings_modal : {
                title : 'Настройки файлов cookie',
                save_settings_btn : 'Сохранить настройки',
                accept_all_btn : 'Принять все соглашения',
                close_btn_label: 'Закрыть',
                blocks : [
                    {
                        title : 'Необходимые',
                        description: 'Использование файлов cookie, помеченных как необходимые, необходимо для надлежащего функционирования Веб-сайта. Необходимые файлы cookie устанавливаются, в частности, для запоминания сеансов входа в систему или заполнения форм, а также для целей, связанных с настройкой параметров конфиденциальности.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true,
                        },
                    }, {
                        title : 'Функциональные',
                        description: 'Функциональные файлы cookie запоминают и адаптируют Веб-сайт к выбору, сделанному Пользователем. Отсутствие согласия может привести к тому, что Веб-сайт не будет работать должным образом',
                        toggle : {
                            value : 'functions',
                            enabled : false,
                            readonly: false,
                        },
                    }, {
                        title : 'Аналитические',
                        description: 'Использование файлов cookie, помеченных как аналитические, заключается в проверке количества посещений и источников трафика на Веб-сайте. Эти файлы позволяют изучать статистику и улучшать работу Веб-сайта. Если Пользователь не разрешит использование этих файлов cookie, Администратор не будет знать, что Пользователь посетил Веб-сайт.',
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

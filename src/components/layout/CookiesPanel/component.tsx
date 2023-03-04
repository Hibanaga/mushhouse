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
                description : 'Our website uses cookies. The website also uses third-party cookies to use analytical or marketing tools. Do you agree to the use of non-essential cookies described in the Privacy Policy?',
                primary_btn: {
                    text: 'I agree',
                    role: 'accept_all',  //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text : 'Details',
                    role : 'settings',   //'settings' or 'accept_necessary'
                },

            },
            settings_modal : {
                title : 'Cookie settings',
                save_settings_btn : 'Save the settings',
                accept_all_btn : 'Accept all consents',
                close_btn_label: 'Close',
                blocks : [
                    {
                        title : 'Necessary',
                        description: 'The use of cookies marked as necessary is necessary for the proper functioning of the Website. Necessary cookies are installed in particular for the purpose of remembering login sessions or filling out forms, as well as for purposes related to setting privacy options.',
                        toggle : {
                            value : 'necessary',
                            enabled : true,
                            readonly: true,
                        },
                    }, {
                        title : 'Functional',
                        description: 'Functional cookies remember and adapt the Website to the choices made by the User. Lack of consent may cause that the Website will not work properly',
                        toggle : {
                            value : 'functions',
                            enabled : false,
                            readonly: false,
                        },
                    }, {
                        title : 'Analytical',
                        description: 'The use of cookies marked as analytical is to check the number of visits and traffic sources on the Website. These files allow you to study statistics and improve the performance of the Website. If the User does not allow the use of these cookies, the Administrator will not know that the User has visited the Website.',
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

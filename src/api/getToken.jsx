import Cookies from 'js-cookie';

export const getToken = () => {
    try {
        const token = Cookies.get('token');
        if(window) {
            return token;
        }
        return ''
    } catch (e) {
        console.log('Error with getToken: ',e);
    }
}
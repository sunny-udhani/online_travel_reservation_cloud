const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://35.185.121.58';

const headers = {
    'Accept': 'application/json'
};

export const bookCar = (payload) =>
    fetch(`${api}/users/bookCar`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials: 'include'
    }).then(res => {
        return res;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

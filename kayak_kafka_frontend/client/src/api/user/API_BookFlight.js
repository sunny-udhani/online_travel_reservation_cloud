const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://35.185.121.58:3001';

const headers = {
    'Accept': 'application/json'
};

export const bookFlight = (payload) =>
    fetch(`${api}/users/bookFlight`, {
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

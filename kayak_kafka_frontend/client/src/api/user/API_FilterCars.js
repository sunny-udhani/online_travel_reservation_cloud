const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://35.196.249.89';

const headers = {
    'Accept': 'application/json'
};

export const filterCars = (payload) =>
    fetch(`${api}/listings/filterCars`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error");
        return error;
    });

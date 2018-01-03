const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://35.196.249.89';

const headers = {
    'Accept': 'application/json'
};

export const addUserCard = (payload) =>
    fetch(`${api}/users/addusercard`, {
        method: 'POST',
        headers: {
            ...headers,
        },
        body: payload,
        credentials: 'include'
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error");
        return error;
    });

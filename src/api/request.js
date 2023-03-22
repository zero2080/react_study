const API_PATH = 'http://localhost:3030';

async function request(option){
    let url = `${API_PATH}/sound/${option.path}?${option.query}`;
    
    const res = await fetch(url, {
        method: 'GET'
    });

    const data = await res.json();
    return data;
}

export default request;
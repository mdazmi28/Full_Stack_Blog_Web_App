import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export async function categories() {
    let res = await axios.get(baseURL + '/categories');
    if (res.status === 200) {
        return res.data;
    }else {
        return [];
    }
}

export async function blogs() {
    let res = await axios.get(baseURL + '/blogs');
    if(res.status === 200){
        return res.data;
    }
    else{
        return  [];
    }
}
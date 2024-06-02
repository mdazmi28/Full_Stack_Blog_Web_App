import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export async function navList() {
    let res = await axios.get(baseURL + '/readnav');
    if (res.status === 200) {
        return res.data;
    }else {
        return [];
    }
}

export async function posts() {
    let res = await axios.get(baseURL + '/read');
    if(res.status === 200){
        return res.data;
    }
    else{
        return  [];
    }
}
import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api';

export async function categories() {
    let URL = `${baseURL}/categories/`;
    // let res = await axios.get(baseURL + '/categories/');
    let res = await axios.get(URL);
    if (res.status === 200) {
        return res.data;
    }else {
        return [];
    }
}

export async function blogs() {
    let URL = `${baseURL}/blogs/`;
    // let res = await axios.get(baseURL + '/blogs/');
    let res = await axios.get(URL);
    if(res.status === 200){
        return res.data;
    }
    else{
        return  [];
    }
}

export async function blogsByCategory(id) {
    let URL = `${baseURL}/blogs/${id}/`;
    let res = await axios.get(URL);
    // let res = await axios.get(baseURL + '/blogs/'+id+'/');
    if(res.status === 200){
        return res.data;
    }
    else{
        return  [];
    }
}

// blogs/details/
export async function blogsDetails(id) {
    let URL = `${baseURL}/blogs/details/${id}/`;
    // let res = await axios.get(baseURL + '/blogs/details/'+id+'/');
    let res = await axios.get(URL);
    if(res.status === 200){
        return res.data;
    }
    else{
        return  [];
    }
}
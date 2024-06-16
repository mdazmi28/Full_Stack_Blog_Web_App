import axios from "axios";

let baseURL = 'http://127.0.0.1:8000/api'

export function postBlog(title, description, img, category){
    let URL = `${baseURL}/blogs/create/`
    let PostBody = {title, description, img, category}
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status === 201){
            return true
        }else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    });
}
//
export function readBlog(){
    let URL = `${baseURL}/blogs/`
    return axios.get(URL).then((res)=>{
        if(res.status === 200){
            return res.data
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
}


export async function updateBlog(id, title, description, img, category){
    let URL = `${baseURL}/blogs/update/${id}/`
    let PostBody = {title, description, img, category}
    try {
        const res = await axios.put(URL, PostBody);
        console.log('Response:', res); // Log the response
        if (res.status === 200) {
            return res.data;
        } else {
            console.error('Unexpected response status:', res.status); // Log unexpected status
            return false;
        }
    } catch (err) {
        console.error("Error in updateBlog:", err.response ? err.response.data : err.message); // Log detailed error
        return false;
    }
}

export function deleteBlog(id) {
    const URL = `${baseURL}/blogs/delete/${id}/`;
    return axios.delete(URL)
        .then(res => res.status === 204)
        .catch(err => {
            console.log(err);
            return false;
        });
}

export async function postCategory(category) {
    const URL = `${baseURL}/categories/create/`;
    const PostBody = {category};
    try {
        const res = await axios.post(URL, PostBody);
        return res.status === 201;
    } catch (err) {
        console.error("API Error:", err); // Debugging log
        return false;
    }
}


export async function readCategory() {
    const URL = `${baseURL}/categories/`;
    try {
        const res = await axios.get(URL);
        if (res.status === 200) {
            return res.data;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}


export async function updateCategory(id, category) {
    const URL = `${baseURL}/categories/update/${id}/`;
    const PostBody = {category};
    try {
        const res = await axios.put(URL, PostBody);
        console.log('Response:', res); // Log the response
        if (res.status === 200) {
            return res.data;
        } else {
            console.error('Unexpected response status:', res.status); // Log unexpected status
            return false;
        }
    } catch (err) {
        console.error("Error in updateCategory:", err.response ? err.response.data : err.message); // Log detailed error
        return false;
    }
}



export function deleteCategory(id) {
    const URL = `${baseURL}/categories/delete/${id}/`;
    return axios.delete(URL)
        .then(res => res.status === 204)
        .catch(err => {
            console.log(err);
            return false;
        });
}
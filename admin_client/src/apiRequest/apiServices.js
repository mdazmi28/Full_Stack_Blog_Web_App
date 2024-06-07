import axios from "axios";

const baseURl = 'http://127.0.0.1:8000/api'

export function postBlog(title, description, img, img_description, category){
    let URL = `${baseURl}/blogs/create`
    let PostBody = {
        title: title,
        description: description,
        img: img,
        img_description: img_description,
        category: category
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status === 200){
            return true
        }else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    });
}

export function updateBlog(id,title, description, img, img_description, category){
    let URL = `${baseURl}/blogs/update/${id}`
    let PostBody = {
        title: title,
        description: description,
        img: img,
        img_description: img_description,
        category: category
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status === 200){
            return true
        }else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    });
}

export function deleteBlog(id){
    let URL = `${baseURl}/blogs/delete/${id}`
    return axios.get(URL).then((res)=>{
        if(res.status === 200){
            return true
        }else {
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    });
}
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

export function readBlog(){
    let URL = `${baseURl}/blogs`
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

export function updateBlog(id){
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

export function postCategory(category){
    let URL = `${baseURl}/categories/create`
    let PostBody = {
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

export function readCategory(){
    let URL = `${baseURl}/categories`
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

export function updateCategory(id){
    let URL = `${baseURl}/categories/update/${id}`
    let PostBody = {
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

export function deleteCategory(id){
    let URL = `${baseURl}/categories/delete/${id}`
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
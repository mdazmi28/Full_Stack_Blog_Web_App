import axios from "axios";

let baseURL = 'http://127.0.0.1:8000/api'


// export function postBlog(title, description, img, img_description, category){
//     let URL = `${baseURl}/blogs/create`
//     let PostBody = {
//         title: title,
//         description: description,
//         img: img,
//         img_description: img_description,
//         category: category
//     }
//     return axios.post(URL,PostBody).then((res)=>{
//         if(res.status === 200){
//             return true
//         }else {
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     });
// }
//
// export function readBlog(){
//     let URL = `${baseURl}/blogs`
//     return axios.get(URL).then((res)=>{
//         if(res.status === 200){
//             return res.data
//         }else{
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     })
// }
//
// export function updateBlog(id){
//     let URL = `${baseURl}/blogs/update/${id}`
//     let PostBody = {
//         title: title,
//         description: description,
//         img: img,
//         img_description: img_description,
//         category: category
//     }
//     return axios.post(URL,PostBody).then((res)=>{
//         if(res.status === 200){
//             return true
//         }else {
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     });
// }
//
// export function deleteBlog(id){
//     let URL = `${baseURl}/blogs/delete/${id}`
//     return axios.get(URL).then((res)=>{
//         if(res.status === 200){
//             return true
//         }else {
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     });
// }

export async function postCategory(category) {
    const URL = `${baseURL}/categories/create/`;
    const postBody = { category };
    try {
        const res = await axios.post(URL, postBody);
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
    const postBody = { category };
    try {
        const res = await axios.put(URL, postBody);
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
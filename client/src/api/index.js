import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchContacts = () => axios.get('https://jsonplaceholder.typicode.com/users');
export const fetchImages = () => axios.get('https://picsum.photos/v2/list?page=1&limit=10');
export const createPost = (newPost) => axios.post(url, newPost);
export const fetchPosts = () => axios.get(url);
export const deletePost = (id) => axios.delete(`${url}${id}`);
export const updatePost = (id, postData) => axios.post(`${url}${id}`, postData);

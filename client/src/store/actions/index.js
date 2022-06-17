import * as api from '../../api';

export const getContacts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchContacts();
        dispatch({
            type: 'FETCH_CONTACTS',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const getImages = () => async (dispatch) => {
    try {
        const { data } = await api.fetchImages();
        dispatch({
            type: 'FETCH_IMAGES',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (postdata) => async (dispatch) => {
    try {
        await api.createPost(postdata);
        console.log("sending data", postdata)
        dispatch({
            type: 'CREATE',
            payload: postdata,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({
            type: 'FETCH_POSTS',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePost(id);
        dispatch({
            type: 'DELETE',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id, postData) => async (dispatch) => {
    try {
        await api.updatePost(id, postData);
        dispatch({
            type: 'LIKE',
            payload: id,
        });
    } catch (error) {
        console.log(error.message);
    }
}
import React, { useEffect, useState } from 'react';
import style from './Homepage.module.scss';
import FileBase from 'react-file-base64';

import Contacts from '../../components/Contacts/Contacts';
import Suggestions from '../../components/Suggestions/Suggestions';

//MUI imports
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts, deletePost } from '../../store/actions';

const Homepage = () => {

    const dispatch = useDispatch();

    const [postdata, setPostData] = useState({ title: '', description: '', image: '' });

    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, ])

    const handleFileChange = (fileData) => {
        setPostData(fileData);
    }

    const handleDelete = (id) =>{
        dispatch(deletePost(id))
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        dispatch(createPost(postdata))
        setPostData({
            title: "",
            description: "",
            image: ""
        })
    }


    return (
        <div className={style.container}>
            <div className={style.contactSection}>
                <Contacts />
            </div>
            <div className={style.feed}>
                <div className={style.card}>
                    <div className={style.cardHeader}>
                        New Post
                    </div>
                    <form autoComplete='off' onSubmit={handleSubmit} className={style.form} action="">
                        <TextField
                            fullWidth
                            placeholder='Title'
                            size='small'
                            value={postdata.title}
                            onChange={(e) => setPostData({ ...postdata, title: e.target.value })}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder='Write Something...'
                            size='small'
                            value={postdata.description}
                            onChange={(e) => setPostData({ ...postdata, description: e.target.value })}
                        />
                        <div className={style.buttons}>
                            <div className={style.uploadBtn}>
                                <span className={style.uploadBtnText}>
                                    Select Image
                                </span>
                                <FileBase
                                    type='file'
                                    multiple={false}
                                    onDone={({ base64 }) => handleFileChange({ ...postdata, image: base64 })}
                                />
                            </div>
                            <div className={style.submitBtn}>
                                <Button
                                    size='small'
                                    type='submit'
                                    variant='outlined'
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    posts.map((i, j) => (
                        <div key={j} className={style.card}>
                            <div className={style.postImage}>
                                <img src={i.image} alt="" />
                            </div>
                            <div className={style.postDetails}>
                                <div className={style.postTitle}>
                                    {i.title}
                                </div>
                                <div className={style.postDescription}>
                                    {i.description}
                                </div>
                            </div>
                            <div className={style.postActions}>
                                <div onClick={()=> handleDelete(i._id)} className={style.delete}>
                                    <span className={style.deleteIcon}>
                                        <i className='feather-trash-2' />
                                    </span>
                                    <span className={style.deleteText}>
                                        Remove
                                    </span>
                                </div>
                                <div className={style.likesAndDislikes}>
                                    <div className={style.likes}>
                                        <span className={style.likeIcon}>
                                            <i className='feather-thumbs-up' />
                                        </span>
                                        <span className={style.likeCount}>
                                            0 Likes
                                        </span>
                                    </div>
                                    <div className={style.dislikes}>
                                        <span className={style.dislikeIcon}>
                                            <i className='feather-thumbs-down' />
                                        </span>
                                        <span className={style.dislikeCount}>
                                            0 Dislikes
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )).reverse()
                }
            </div>
            <div className={style.suggestions}>
                <Suggestions />
            </div>
        </div>
    )
}

export default Homepage
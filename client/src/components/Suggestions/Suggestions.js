import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../store/actions';
import style from './Suggestions.module.scss';

const Suggestions = () => {

    const dispatch = useDispatch();

    const images = useSelector(state => state.images);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.header}>
                Lorem Picsum Posts
            </div>
            <div className={style.contents}>
                {
                    images.map((i, j) => (
                        <div key={j} className={style.picsumPost}>
                            <img src={i.download_url} alt="" />
                            <div className={style.author}>
                                <div className={style.background}></div>
                                <div className={style.authorName}>
                                    {i.author}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Suggestions
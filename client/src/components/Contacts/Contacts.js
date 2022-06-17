import React, { useEffect } from 'react';
import style from './Contacts.module.scss';

//redux imports
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions';

const Contacts = () => {
  const AvatarImage = "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

  const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <div className={style.container}>
      <div className={style.header}>
        Contacts
      </div>
      {
        contacts.map((i, j) => (
          <div key={j} className={style.contents}>
            <div className={style.contact}>
              <div className={style.contactImg}>
                <img src={AvatarImage} alt="" />
              </div>
              <div className={style.contactInfo}>
                <div className={style.name}>
                  {i.name}
                </div>
                <div className={style.email}>
                  {i.email}
                </div>
                <div className={style.phoneNumber}>
                  {i.phone}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Contacts
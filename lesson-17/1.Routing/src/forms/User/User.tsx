/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {ResponseError, UserResponse} from '../../types/dumMyApiResponses';
import {getUserById} from "../../api/dumMyApi";
import { useParams } from 'react-router-dom';
import './User.css'
import useScrollToTop from "../../hooks/useScrollToTop";

interface Params {
  id: string;
}

const User = () => {
  useScrollToTop()
  const [user, setUser] = useState({} as UserResponse);
  const [loading, setLoading] = useState(true);
  const params = useParams<Params>();
  useEffect(() => {
    setLoading(true);
    getUserById(params.id, setUser, ({error}: ResponseError) => alert(error), () => setLoading(false));
  },[])
  return (
    <div className="user-form">
      {loading ? 'Идёт загрузка' :
        <div>
        <img src={user.picture}/>
        <div>
        {`${user.title} ${user.firstName} ${user.lastName} ${user.gender}`}
        </div>
        </div>}
    </div>
  );
};

export default User;

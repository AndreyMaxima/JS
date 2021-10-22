import React from 'react'
import './Comments.css'
import {apiResponse} from "../../api-mock/api.js";
import {Comment} from "../../components/comment/Comment";

export class Comments extends React.Component {
  render() {
    return <div className='comments-form'>
      {apiResponse.status === 'ok' ?
        apiResponse.result.map((elem, index) => <Comment name = {elem.name} text={elem.text} key={index}/>) :
        'При загрузке произошла ошибка'
      }
    </div>
  }
}
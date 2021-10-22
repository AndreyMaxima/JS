import React from 'react'
import './Comment.css'


export class Comment extends React.Component {
  render(){
    return <div className="comment">
      {console.log('I`m alive') /*Этот код будет выполнен*/}
      <div className="comment__user-name">{this.props.name/*Все переданные пропсы находятся в this.props*/}</div>
      <div className="comment__text">{this.props.text}</div>
    </div>
  }
}


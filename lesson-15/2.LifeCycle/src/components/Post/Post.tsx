/* eslint-disabled */

import React from 'react';
import './Post.css';
import LikeButton from '../LikeButton/LikeButton';

interface Props {
  text: string;
}

interface State {
  liked: boolean;
}

export default class Post extends React.Component<Props, State> {
  // ------------------------------Этап монтирования----------------------------------
  constructor(props: Props) { // Выполняется первым при монтировании компонента
    super(props);
    this.state = { liked: false };
    this.handleLike = this.handleLike.bind(this);
    // Не выполняем AJAX-запросов
    // Устанавливаем начальные значения, байндим методы
  }

  componentDidMount() { // Выполняется третьим при монтировании
    // Можем выполнять AJAX-запросы
    // Не вызываем setState
    console.log('Я смонтирован');
  }

  // ------------------------------Этап обновления----------------------------------

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<any>, nextContext: any): boolean { // Вызывается при необходимости перерисовки (до обновления)
    console.log(nextState);
    console.log(this.state);
    return true; // Если вернул false, то перерисовка не произойдёт
    //  Используется для оптимизации
    //  Здесь не делаем AJAX-запросов
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void { // Вызывается после перерисовки компонента (после монтирования не вызывается)
    console.log('Я перерисовался');
    // Делаем AJAX-запросы
    // Не делаем setState
  }

  componentWillUnmount(): void { // Вызывается перед размонтированием объекта
    // Удаляем интервалы и таймеры, удаляем listener'ы
    // Не используем setState
  }

  handleLike() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() { // Выполняется вторым при монтировании компонента. Выполняется вторым при обновлении (если shouldComponentUpdate вернул true)
    return (
      <div className="post">
        <div className="post__text">
          {this.props.text}
        </div>
        <div className="post__like">
          <LikeButton setLiked={this.handleLike} liked={this.state.liked} />
        </div>
      </div>
    );
  }
}

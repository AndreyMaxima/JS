import React, { RefObject } from 'react';
import './Comment.css';

// import PropTypes from 'prop-types'

interface Props { // Объявление интерфейса пропсов
  name?: string;
  text?: string;
  addLike?: () => void;
  removeLike?: () => void;
}

interface State {
  liked: boolean
}

export default class Comment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props); // Обязательно
    this.handleLike = this.handleLike.bind(this); // Обязательно привязываем this к методам
    this.state = { liked: false };
    this.textDiv = React.createRef(); // Создание ссылки
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleLike(e: any) {
    // console.log(e); // Генерируется объект SyntheticEvent (обёртка над event'oм)
    // @ts-ignore
    // this.state.liked = !this.state.liked; Так не работает, стэйт на прямую не меняем
    // alert(this.textDiv.current.innerHTML);
    !this.state.liked
      ? this.props.addLike && this.props.addLike()
      : this.props.removeLike && this.props.removeLike();
    this.setState({ // Так меняем стэйт (планируется смена состояния, происходит не моментально) (изменение внутри рендера приведёт к ошибке)
      liked: !this.state.liked, // Изменится только то, что передали
    });
  }

  textDiv: RefObject<HTMLDivElement>; // Ссылка на элемент

  render() {
    return (
      <div className="comment">
        <div className="comment__user-name">{this.props.name || 'Незнакомец'}</div>
        <div ref={this.textDiv /* присвоение ссылки */} className={`comment__text ${this.state.liked && 'text-liked'}`}>{this.props.text || '-'}</div>
        <div className="comment__like" onClick={this.handleLike}>
          {this.state.liked ? 'Лайкнуто' : 'Не лайкнуто'}
        </div>
      </div>
    );
  }
}

// Comment.propTypes = {
//   name: PropTypes.string, // Назначение типа пропсу
//   text: PropTypes.string,
//   array: PropTypes.array,
//   arrayType: PropTypes.arrayOf(PropTypes.string), // Типизированный массив
//   bool: PropTypes.bool,
//   func: PropTypes.func,
//   num: PropTypes.number,
//   obj: PropTypes.object,
//   reactElem: PropTypes.element, //Экземпляр React-элемента
//   reactClass: PropTypes.elementType, //Экземпляр React-элемента
//   inst: PropTypes.instanceOf(Comment), // Экземпляр конкретного класса,
//   optionalEnum: PropTypes.oneOf(['one', 'two']), // Один из вариантов
//   optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Один из типов
//   struct: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number
//   })
// }

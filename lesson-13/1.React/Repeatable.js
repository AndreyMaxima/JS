// class Repeatable extends React.Component { // Класс-компонент
//   render() { // Функция, выполняемая при рендере
//     return React.createElement( // Создание элемента React
//       'div',
//       {
//       className: 'repeatable__fifth-row'
//     },
//       'HTML')
//   }
// }

class Repeatable extends React.Component { // Класс-компонент
  render() { // Функция, выполняемая при рендере
    return <div className="repeatable">
      <div className="repeatable__first-row">Один</div>
      <div className="repeatable__second-row">и</div>
      <div className="repeatable__third-row">тот же</div>
      <div className="repeatable__fourth-row">кусок</div>
      <div className="repeatable__fifth-row">HTML</div>
    </div>
  }
}

ReactDOM.render( // Рендер компонента
  React.createElement(Repeatable), // Что рендерить
  document.getElementById('first-container') //Куда рендерить
)

ReactDOM.render(
  React.createElement(Repeatable), document.getElementById('second-container')
)

ReactDOM.render(
  React.createElement(Repeatable), document.getElementById('third-container')
)
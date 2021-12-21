window.addEventListener('load', () => {
  navigator.serviceWorker && navigator.serviceWorker.register('/serviceWorker.js').catch(console.error)
})

const getTextArray = async () => {
  const textArray = []
  await Promise.all([
    fetch('https://fish-text.ru/get').then(resp => resp.json()).then(text => textArray.push(text.text)),
    fetch('https://fish-text.ru/get').then(resp => resp.json()).then(text => textArray.push(text.text)),
    fetch('https://fish-text.ru/get').then(resp => resp.json()).then(text => textArray.push(text.text)),
    fetch('https://fish-text.ru/get').then(resp => resp.json()).then(text => textArray.push(text.text)),
    fetch('https://fish-text.ru/get').then(resp => resp.json()).then(text => textArray.push(text.text))]
  )
  return textArray
}

const contentDiv = document.getElementById('content')

getTextArray()
  .then(textArray => {
    textArray.forEach(text => {
      const container = document.createElement('div')
      container.className = 'content_text-block'
      container.textContent = text;
      contentDiv.append(container)
    })
  })

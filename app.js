let dataPanel = document.querySelector('.scores-container')
let scoreHTML = ""

axios.get('data.json')
  .then(response => {
    const data = response.data

    data.forEach(item => {
      scoreHTML += `
        <div class="${item.category.toLowerCase()}-background row">
        <div class="test-category">
          <img class="category-icon" src ="${item.icon}">
          <p class="${item.category.toLowerCase()}-title">${item.category}</p>
        </div>
        <div class="marks">
          <p class="score">${item.score}</p>
          <p class="full-score">/ 100</p>
        </div>
      </div>
      `
      dataPanel.innerHTML = scoreHTML
    })
  })
  .catch(error => console.log(error))

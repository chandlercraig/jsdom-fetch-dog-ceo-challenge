const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArr = []

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages() {
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
    renderImg(imgsArray)
  })
}

function createImgElement(imgs) {
  return imgs.map((img) => {
    let i = `<img src=${img}>`
    return i 
  });
}

function renderImgs(imgsArray) {
  imgsArray.forEach(element => {
    container.innerHTML += element
  });
}

function renderImg(element) {
  container.innerHTML += element
}

function getBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(breeds => {
    breedsArr = Object.keys(breeds.message)
    const breedLis = createLiElement(breedsArr)
    renderLis(breedLis)
  })
}

function createLiElement(breedsArr) {
  return breedsArr.map((breed) => {
    let li = `<li>${breed}</li>`
    return li 
  });
}

function renderLis(breedLis) {
  breedLis.forEach(element => {
    ulContainer.innerHTML += element
  });
}

function handleClick(event) {
  if (event.target.nodeName === 'LI') {
    if (event.target.style.color === 'blue'){
      event.target.style.color = 'black'
    } else {
      event.target.style.color = 'blue'
    }
  }
}

function handleChange(event) {
  const letter = event.target.value
  const filteredBreeds = breedsArr.filter(breed => breed.startsWith(letter))
  const filtBreedLis = createLiElement(filteredBreeds)
  ulContainer.innerHTML = ''
  renderLis(filtBreedLis)
}


// getImages()
getBreeds()

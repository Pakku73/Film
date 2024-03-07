// const key = '80a0e3da'

const poster = document.querySelector(".img")
const title = document.querySelector(".title")
const date = document.querySelector(".date")
const btn = document.querySelector(".btn")

axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=80a0e3da`)

.then(res => res.data)
.then(body => {
    title.textContent = `${Title}`;
    date.textContent = `${Year}`;
    img.src = `${poster}`;
})

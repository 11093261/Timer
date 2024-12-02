const month = document.querySelector(".month")
const week = document.querySelector(".week")
const day = document.querySelector(".days")
const year = document.querySelector(".year")

const date = new Date();
const months = date.getMonth()
month.innerText = date.toLocaleString("en",{months:"long"},)
month.style.width = "20%"
const days = date.getDay()
day.innerText = date.toLocaleString("en",{days:"long"})
const years = date.getFullYear()
year.innerText = date.toLocaleString("en",{years:"long"})

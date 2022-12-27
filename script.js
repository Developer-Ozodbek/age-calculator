const calculatedAge = document.querySelector('footer h3'),
day = document.querySelector('#day'),
month = document.querySelector('#month'),
submitBtn = document.querySelector('.btn input'),
year = document.querySelector('#year');

let date = new Date(),
d = date.getDay() + 24,
m = date.getMonth() + 1,
y = date.getFullYear();


submitBtn.addEventListener('click', ()=> {
    calculatedAge.innerHTML = `sizning yoshingiz ${y - year.value}-yosh, ${m - month.value}-oy, ${d - day.value}-kun`
})


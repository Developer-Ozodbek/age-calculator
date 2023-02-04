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
    calculatedAge.innerHTML = `your age is ${y - year.value}-year, ${m - month.value}-moth, ${d - day.value}-day`
    if(day.value === '' ?? month.value === '' ?? year.value === ''){
        calculatedAge.innerHTML = 'ERROR: please, input it'
    }
})


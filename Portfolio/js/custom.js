const collapse =document.querySelectorAll('.nav-link');
const menu =document.getElementById('ftco-nav');
console.log(collapse);
for (let i= 0;i<collapse.length;i++){
    collapse[i].addEventListener('click',()=>{
        console.log(collapse[i]);
        menu.classList.toggle('show');
        menu.classList.toggle('collapsing');
        menu.classList.toggle('collapse');
        
    })


}
let fst_nav = document.querySelector('.fst');
let scd_nav = fst_nav.nextElementSibling;
let sub_nav;

function modal_sub_nav(nav){
    nav.addEventListener('mouseover',()=>{
        sub_nav = nav.lastElementChild;
        sub_nav.classList.add('on');
    })
    
    nav.addEventListener('mouseout',()=>{
        sub_nav.classList.remove('on');
    })
    
}

modal_sub_nav(fst_nav);
modal_sub_nav(scd_nav);
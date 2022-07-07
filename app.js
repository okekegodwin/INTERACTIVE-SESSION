const my_reply1 = document.querySelector(".reply_amy");
const my_comment1 = document.querySelector(".comment1");


my_reply1.addEventListener ('click', () => {
    if (my_comment1.style.display === 'none') {
        my_comment1.style.display = 'block';
    } else {
        my_comment1.style.display = 'block';
    }
})

const mySend1 = document.querySelector(".send1");
const myComment1 = document.querySelector(".comment1");

mySend1.addEventListener ('click', () => {
    if (myComment1.style.display === 'block') {
        myComment1.style.display = 'none'
    }
})

const my_reply2 = document.querySelector(".reply_max");
const my_comment2 = document.querySelector(".comment2");

my_reply2.addEventListener ('click', () => {
    if (my_comment2.style.display === 'none') {
        my_comment2.style.display = 'block';
    } else {
        my_comment2.style.display = 'block';
    }
})

const mySend2 = document.querySelector(".send2");
const myComment2 = document.querySelector(".comment2");

mySend2.addEventListener ('click', () => {
    if (myComment2.style.display === 'block') {
        myComment2.style.display = 'none';
    }
})

const my_reply3 = document.querySelector(".reply_ram");
const my_comment3 = document.querySelector(".comment3");

my_reply3.addEventListener ('click', () => {
    if (my_comment3.style.display === 'none') {
        my_comment3.style.display = 'block';
    } else {
        my_comment3.style.display = 'block';
    }
})

const mySend3 = document.querySelector(".send3");
const myComment3 = document.querySelector(".comment3");

mySend3.addEventListener ('click', () => {
    if (myComment3.style.display === 'block') {
        myComment3.style.display = 'none';
    }
})

const del_btn = document.querySelector(".delete_juli");
const del_opt = document.querySelector(".my_delete");

del_btn.addEventListener ('click', () => {
    if (del_opt.style.display === 'none') {
        del_opt.style.display = 'block';
    } else {
        del_opt.style.display = 'none';
    }
})

const delBtnYes = document.querySelector(".yes_btn");
const del_opt_yes = document.querySelector(".my_delete");
const juliusomo = document.querySelector('.juliusomo');

delBtnYes.addEventListener('click', () =>{
    juliusomo.style.display = "none"
    del_opt_yes.style.display = "none"
});

// delBtnYes.addEventListener ('click', () => {
//     if (del_opt_yes.style.display === 'block') {
//         del_opt_yes.style.display = 'none';
//     }
// })

const delBtnNo = document.querySelector(".no_btn");
const del_opt_no = document.querySelector(".my_delete");

delBtnNo.addEventListener ('click', () => {
    if (del_opt_no.style.display === 'block') {
        del_opt_no.style.display = 'none';
    }
});
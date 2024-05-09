LikeCountElement = document.getElementById('btn-3')
DisLikeCountElement = document.getElementById('btn-4')

const like = document.getElementById('btn-5')

let Dislike = document.getElementById('btn-6')
let LikeCuenta = 0;
let DisLikeCuenta = 0;

like.addEventListener( 'click' , () => {

    LikeCuenta++;
    LikeCountElement.textContent = LikeCuenta;

})


Dislike.addEventListener( 'click' , () => {

   DisLikeCuenta++;
   DisLikeCountElement.textContent = DisLikeCuenta;
 
 })
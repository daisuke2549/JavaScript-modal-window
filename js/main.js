// 'use strict';


// let score =70;

// if(score > 60){
//     console.log('you are good');
// }





// {
//     // alert("削除しますか？");

//     const answer = confirm('削除しますか？');
//    if (answer){
//        console.log('削除しました');
//    }else{
//      console.log('キャンセルしました');
//    }
// }



// {
//     let i = 0;

//     function showTime() {
//       console.log(new Date());
//       i++;
//       if (i > 2) {
//         clearInterval(intervalId);
//       }
//     }

//     const intervalId = setInterval(showTime, 1000);
//   }


'use strict';

{
   const open = document.getElementById('open');
   const close = document.getElementById('close');
   const modal = document.getElementById('modal');
   const mask = document.getElementById('mask');

   open.addEventListener('click', () =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');

   });
    close.addEventListener('click', () =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');

   });
}
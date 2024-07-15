 let a=document.getElementsByClassName("bulb");
 a[0].onclick=function(){
a[0].classList.toggle("color");
for(let i=0;i<=3;i++){
   console.log( a[0].getElementsByTagName("h3")[i].classList.toggle="cl");
}
} 
// let small=a[0].childNodes[3];
// setInterval(() => {
//     small.classList.add("rotate1");
// }, 60000);

const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");

const timer = {
    hr: 0,
    min: 0,
    sec: 0,
    day: new Date().toISOString()
};
console.log(timer.day)

setInterval(() => {
    timer.sec++;
    if (timer.sec === 60) {
        timer.sec = 0;
        timer.min++;
    }
    if (timer.min === 60) {
        timer.min = 0;
        timer.hr++;
    }
    if (timer.hr === 24) {
        timer.hr = 0;
        // Assuming day increment is needed every 24 hours
        timer.day = (timer.day + 1) % 7;
    }
    h1.style.transform=`rotate(${timer.sec*6}deg)`
    h1.style.transformOrigin=`left bottom`
    h2.style.transform=`rotate(${timer.min*6}deg)`
    h2.style.transformOrigin=`left bottom`
    h3.style.transform=`rotate(${timer.hr*6}deg)`
    h3.style.transformOrigin=`left bottom`

    // console.log(`Time: ${timer.hr}hr ${timer.min}min ${timer.sec}sec Day: ${timer.day}`);
}, 1000);
const date = new Date();
 let date1=document.querySelector('.date');
 
//  document.write(`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`)
 date1.innerHTML=`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
 
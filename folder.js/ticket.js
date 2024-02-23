function getAiPoribon(){
    const bannar=document.getElementById('banner')
    bannar.classList.add('hidden')
     const coupon=document.getElementById('coupon')
     coupon.classList.add('hidden')
    const AiPoribon=document.getElementById('Ai-poribon')
    AiPoribon.classList.remove('hidden')
}
function getNumberInter(elementId){
    const re=document.getElementById(elementId).innerText;
    const number=parseInt(re)
    return number
}
const seatNumber=getNumberInter('seat-number')
console.log(seatNumber)
const seatsLeft=getNumberInter('seats-left')
console.log(seatsLeft)






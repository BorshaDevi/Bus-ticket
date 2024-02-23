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
const seatsLeft=getNumberInter('seats-left')

const seatBtn=document.getElementsByClassName('seat-btn')
for(let seat of seatBtn){
    seat.addEventListener('click',function(event){
        seatnum=0
        if(seatnum>4){
            seat.classList.add('seatbtn')
        event.classList.remove('hidden')
        event.target.setAttribute('disabled',false)
       

        }
        
    })
}






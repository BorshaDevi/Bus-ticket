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
seatnum=0
const seatBtn=document.getElementsByClassName('seat-btn')
for(let seat of seatBtn){
    
    seat.addEventListener('click',function(event){ 
        if(seatnum<4===true){
            seat.classList.add('seatbtn')
            seat.classList.add('text-white')
            seat.target.setAttribute('disabled',false)
            seat.classList.remove('seatbtn')
            seatnum=seatnum+1

        }

        
    })
}






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
const takaId=getNumberInter('takaId')



seatnum=0
const seatBtn=document.getElementsByClassName('seat-btn')
for(let seat of seatBtn){
    seat.addEventListener('click',function(){ 
        if(seatnum<4===true){
            seatnum=1+seatnum
            seat.classList.add('text-white')
            seat.classList.add('seatbtn')
            

            // const seatLeftNum=seatsLeft-1
            // console.log(seatLeftNum)

            const selectDiv=document.createElement('div')
            selectDiv.classList.add('setected-filedid')
            const p1=document.createElement('p')
            p1.innerText=seat.innerText
            const p2=document.createElement('p')
            p2.innerText='Economy'
            const p3=document.createElement('p')
            p3.innerText=takaId
            selectDiv.append(p1)
            selectDiv.append(p2)
            selectDiv.append(p3)
            const setectedFiledId=document.getElementById('setected-filed-id')
            setectedFiledId.append(selectDiv)
            getValue(takaId)

           
        } 
    })
}

function getValue(value){
    const totalPriceInt=getNumberInter('total-price')
     sum=totalPriceInt+takaId
     document.getElementById('total-price').innerText=sum
   
}






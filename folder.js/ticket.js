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
let seatNumber=getNumberInter('seat-number')
let seatsLeft=getNumberInter('seats-left')
let takaId=getNumberInter('takaId')
let totalPriceInt=getNumberInter('total-price')
let grandTotal=getNumberInter('Grand-Total')


seatnum=0
const seatBtn=document.getElementsByClassName('seat-btn')
for(let seat of seatBtn){
    seat.addEventListener('click',function(){ 
        if(seatnum<4===true){
            seatnum=1+seatnum
            seat.classList.add('text-white')
            seat.classList.add('seatbtn')

            // const apply=document.getElementById('apply-btn')
            // apply.classList.remove('disabled')
             
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
        else{
            alert('Your limit is done')
        }
    })  
}

function getValue(value){
            totalPriceInt=totalPriceInt+takaId
            document.getElementById('total-price').innerText=totalPriceInt
            grandTotal=grandTotal+takaId
            document.getElementById('Grand-Total').innerText=grandTotal

            seatNumber=seatNumber+1
            document.getElementById('seat-number').innerText=seatNumber

            seatsLeft=seatsLeft-1;
            document.getElementById('seats-left').innerText=seatsLeft
            
}
        document.getElementById('apply-btn').addEventListener('click',function(){
            if('NEW15'===true ){
                grandTotal=grandTotal*15/100
              }
              if('Couple20'===true){
                grandTotal=grandTotal*20/100
              }
        })
        
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
                const coupon=document.getElementById("coupon-field").value
                    if( coupon === 'NEW15'){
                        let totalPriceInt=getNumberInter('total-price')           
                                discountNew=totalPriceInt*15/100
                                grandNew=totalPriceInt-discountNew
                            document.getElementById('Grand-Total').innerText=grandNew
                            const applyNew=document.getElementById('apply-btn')
                            applyNew.classList.add('hidden')
                            const couponNew=document.getElementById('coupon-field')
                            couponNew.classList.add('hidden')
                              }
                              else if(coupon ==='Couple20'){
                                let totalPriceInt=getNumberInter('total-price')
                                discountCouple=totalPriceInt*20/100
                                grandCouple=totalPriceInt-discountCouple
                            document.getElementById('Grand-Total').innerText=grandCouple
                            const applyNew=document.getElementById('apply-btn')
                            applyNew.classList.add('hidden')
                            const couponNew=document.getElementById('coupon-field')
                            couponNew.classList.add('hidden')
                                }   
                    else{
                        alert('Apply Validate Coupon')
                    }
            })
        
            
       

        

        document.getElementById('phoneNum').addEventListener('keyup',function(event){
            const numberB=event.target.value
            
            const nextBtn=document.getElementById('next-id')
            if(numberB ){
                nextBtn.removeAttribute('disabled')
            }
            else{
                nextBtn.setAttribute('disabled')
            }

        })
        document.getElementById('next-id').addEventListener('click',function(event){
            const nav=document.getElementById('navbar')
            nav.classList.add('hidden')

            const ai=document.getElementById('Ai-poribon')
            ai.classList.add('hidden')

            const suss=document.getElementById('PaymentSus')
            suss.classList.remove('hidden')
        })
        
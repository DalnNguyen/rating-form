let html = ''
let number
document.querySelectorAll('.rating-item').forEach((e) => {
    e.addEventListener('click', function() {
        document.querySelectorAll('.rating-item').forEach((el) => {
            el.classList.remove('active')
        })
        this.classList.add('active')
        number = this.innerText
        html = `You selected ${number} out of 5`
    })
})

    document.querySelector('.submit-btn').addEventListener('click',function() {
        if(number == undefined){
            alert('error! You have not voted yet')
        }else{
            let notice = document.querySelector('.notice')
            notice.innerText = html
            document.querySelector('.main').style.display = 'none'
            document.querySelector('.end-main').style.display = 'block'
        }
    
    })



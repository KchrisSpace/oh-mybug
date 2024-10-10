

function handclick(element) {
    // alert(9)
    reversal(element)

}

function reversal(element) {

    let turn = element.getAttribute('data-turn')

    if (turn === 'back') {
        element.children[0].style.transform = 'rotateY(180deg)'
        element.children[1].style.transform = 'rotateY(0deg)'
        element.setAttribute('data-turn', 'front')
    }
    else {
        element.children[0].style.transform = 'rotateY(0deg)'
        element.children[1].style.transform = 'rotateY(-180deg)'
        element.setAttribute('data-turn', 'back')
    }
}
// 计时器
let timeremaining = document.getElementById('timeremain')
let clickcount = document.getElementById('clickcount')
let time = 50
let click = 0
// if (timeremaining) console.log('xx')
let t = setInterval(()=> {
    time--
    timeremaining.innerHTML = time
    if (time === 0) {
        timeremaining.innerText = time
        // console.log(time)
        alert('时间到，游戏失败')
       
            location.reload()
        
 clearInterval(t)
    }
}, 1000)
function handclick(element) {
    reversal(element)
    addcard(element)
    // console.log('0k')
    setTimeout(() => {
        equals(cardchosen)
       
    },500)
    clickcount.innerText=++click
}
function equals(cardS) {
  
    if (cardS.length >= 2) {
        // console.log(cardS[0]); // 查看是否正确选取了元素

        let one = cardS[0].getAttribute('data-number')
        
        let two = cardS[1].getAttribute('data-number')
        setTimeout(function () {
            if (one === two) {
                // console.log('pk')
                cardS[0].style.visibility = 'hidden'
                cardS[1].style.visibility = 'hidden'
                cardhidden.push(cardS[0])
                cardhidden.push(cardS[1])
                console.log(cardS)
                cardS.splice(0, 2)



                if (cardhidden.length == 10) {
                    clearInterval(t)
                    if (confirm('你赢了，再来一次！')) {
                        location.reload()
                    }
                }
            }
            else {
                cardS[0].setAttribute('data-turn', 'front')
                cardS[1].setAttribute('data-turn', 'front')
                reversal(cardS[0])
                reversal(cardS[1])
                cardS.splice(0, 2)
            }
       },100)
    }
    
}
let cards = document.querySelector('.cards')
let cardHTML = '';
for (let i = 0; i < 10; i++) {
    let ran=[2,1,3,2,3,1,4,5,4,5]
    cardHTML += `
        <div class="card" data-number="${ran[i]}" data-turn="back" onclick="handclick(this)">
            <div class="card-back card-face"></div>
            <div class="card-front card-face">
                <div class="card red" data-value="8">${ran[i]}</div>
            </div>
        </div>
    `
}



cards.innerHTML = cardHTML
// 匹配消牌
let cardchosen = []
let cardhidden = []
function addcard(element) {
    let turn = element.getAttribute('data-turn')
    if (turn === 'front') {
        if(cardchosen.indexOf(element) === -1){
            cardchosen.push(element)
            }
        
    }
}


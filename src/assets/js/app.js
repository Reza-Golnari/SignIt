const btnPnlsLst = document.querySelectorAll(".panel-btn");
const pnlPageLst = document.querySelectorAll(".panel-page")

btnPnlsLst.forEach(btn => {
    btn.addEventListener("click" , function (){
        const _type = this.dataset.type;
        const activePnl = document.querySelector('.panel-page--active');
        const targetPage = Array.from(pnlPageLst).find(pnl => pnl.dataset.type === _type)
        targetPage.classList.toggle("panel-page--active")
        if(activePnl && activePnl !== targetPage) activePnl.classList.remove('panel-page--active')
    })
})

document.querySelector('input').addEventListener("input" , e => console.log(e))
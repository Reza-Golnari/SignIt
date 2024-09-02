window.addEventListener("DOMContentLoaded" , ()=> {
    const btnPnlsLst = document.querySelectorAll(".panel-btn");
    const pnlPageLst = document.querySelectorAll(".panel-page");

    btnPnlsLst.forEach(btn => {
        btn.addEventListener("click" , function (){
            const _type = this.dataset.type;
            const activePnl = document.querySelector('.panel-page--active');
            const activeBtn = document.querySelector('.panel-btn--active');
            const targetPage = Array.from(pnlPageLst).find(pnl => pnl.dataset.type === _type)
            this.classList.toggle('panel-btn--active')
            targetPage.classList.toggle("panel-page--active")
            if(activePnl && activePnl !== targetPage) activePnl.classList.remove('panel-page--active')
            if(activeBtn && activeBtn !== this) activeBtn.classList.remove('panel-btn--active')
        })
    })

    const colorInput = document.querySelector("input[type='color']");
    const sizeInput = document.querySelector("#size");
    const radiusInput = document.querySelector("#radius");

    let color = "#ffffff";
    let size = 4;
    let radius = 4;

    colorInput.value = color;
    sizeInput.value = size;
    radiusInput.value = radius;

    colorInput.addEventListener("input" , e => color = e.target.value);
    sizeInput.addEventListener("input" , e => size = e.target.value);
    radiusInput.addEventListener("input" , e => radius = e.target.value);
})
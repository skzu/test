document.addEventListener("DOMContentLoaded",
    function(e){
        let coding = document.querySelector("#hgfds #span")
        let code = document.querySelector("#hgfds #spani")

    code.addEventListener("click",
    function(e){
        coding.textContent = prompt("바꿀 계정명을 써주세요")
    }
)

    let dode = document.querySelector("#dode button")
    
    let soke = document.querySelector("#soke")
    let linke = document.querySelector("#linke")
    let apple = document.querySelector("#apple")
    let chaing = false

    dode.addEventListener("click",
    function(e){
        if(chaing){
            let _soke = soke.querySelector("input").value
            let _apple = apple.querySelector("input").value
            let _linke = linke.querySelector("input").value

            soke.innerHTML = _soke
            apple.innerHTML = _apple

            if (_linke.startsWith("http")){
                _linke = "<a href=" + _linke + ">" + _linke + "</a>"
            }

            linke.innerHTML = _linke

            e.target = "프로필 편집"
            chaing = false

        }else{
            let _soke = soke.textContent
            let _apple = apple.textContent
            let _linke = linke.textContent
            
            soke.innerHTML = "<input value=" + _soke + "></input>"
            apple.innerHTML = "<input value=" + _apple + "></input>"
            linke.innerHTML = "<input value=" + _linke + "></input>"

            e.target.textContent = "프로필 편집 완료"
            chaing = "true"





        }
     }
  )
 
     let Tesla = document.querySelector("#Tesla #NicolaTesla")
     
     Tesla.addEventListener("mouseover",
     function(e){
        e.target.style.filter = "grayscale(50%)"
     }
    )
     Tesla.addEventListener("mouseleave",
     function(e){
         e.target.style.filter = "grayscale(0%)"
     }
     )
     Tesla.addEventListener("click",
     function(e){
         Tesla.setAttribute("src",prompt("이미지 url을 입력하세요"))
     }
     )

 }
)
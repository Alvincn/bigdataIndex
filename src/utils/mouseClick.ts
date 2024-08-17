import {HELLO_ARRAY, COLOR_ARRAY} from "@/config/system";

export const mouseClick = () => {
    document.body.addEventListener('click',(e)=>{
        let x = e.pageX
        let y = e.pageY
        let span = document.createElement('span')
        span.style.position = 'absolute'
        span.style.left = x + 'px'
        span.style.top = y + 'px'
        span.style.opacity = '1'
        span.innerText = HELLO_ARRAY[Math.floor(Math.random() * HELLO_ARRAY.length)]
        span.style.fontWeight = '900'
        span.style.color = COLOR_ARRAY[Math.floor(Math.random() * COLOR_ARRAY.length)]
        span.style.userSelect = 'none'
        let timer = setInterval(()=>{
            let top = +span.style.top.split('px')[0] - 1
            let opacity = +span.style.opacity
            if(opacity <= 0) {
                document.body.removeChild(span)
                clearInterval(timer)
            }
            span.style.top = top + 'px'
            span.style.opacity = (opacity - 0.05).toString()
        },30)
        document.body.appendChild(span)
    })
}

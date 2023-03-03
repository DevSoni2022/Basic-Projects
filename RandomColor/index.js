const refreshBtn  =  document.querySelector(".refresh-btn");
const container  =  document.querySelector(".container");

const maxPalettexBoxes =12
const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
const genrateplate = ()=>{
    container.innerHTML=""
    for(let i=0; i<maxPalettexBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        //
        const color  = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = ` <div class="react-box" style="background:${randomHex}"></div>
        <span class="hex-value">Hex Code :${randomHex}</span>
        `;
        color.addEventListener('click',()=>copyColor(color,randomHex))
        container.appendChild(color)
{/* <span class="hex-value">Rgba Code :${hex2rgba(randomHex)}</span> */}

    }
    let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6,'0')}`;
    console.log(randomHex)
}
genrateplate()
const  copyColor =(elem,hexValue)=>{
const colorElement = elem.querySelector(".hex-value");
navigator.clipboard.writeText(hexValue).then(()=>{
    colorElement.innerText = "Copied"
    setTimeout(()=>colorElement.innerText=hexValue,1000)
})
}
refreshBtn.addEventListener('click',genrateplate)
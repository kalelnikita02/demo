let body= document.body
let section=document.createElement(`section`)
section.style.background="black"
section.style.color="white"
section.style.textAlign="center"
section.id="sec1"
section.className="secclass"
section.innerHTML+='<h1> Hello </h1'
body.appendChild(section)
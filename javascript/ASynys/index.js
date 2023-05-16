let x=async function()

    let data =await fetch("https://fakestoreapi.com/products")
    console.log(data);
    let finalData=await data.json()
    console.log(finalData);
    finalData.map((x)=> {
        let body =document.body
        let section =document.createElement('section')
        section.innerHTML+=`<div class="cards">
            <img src="${x.image}" height="200px" width="300px">
            <p> ${x.}

        </div>`

    })

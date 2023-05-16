let request =new XMLHttpRequest();
request.open('GET','https://api.github.com/users')
request.send()
request.onload= ()=>{console.log(JSON.parse((request.response)))}

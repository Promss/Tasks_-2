const doc = document
const url = 'https://jsonplaceholder.typicode.com/posts'
let output = doc.querySelector('.output')


window.onload = function() {
    fetch(url)
            .then(response => response.json())
            .then(data => loadImages(data))
            .catch(err => console.error(err));    
    
}
function loadImages(data){
    console.log(data);
    data.map(user => {
        let block = doc.createElement('div')
        block.className='cart'
        block.innerHTML = `
        <h4>userID: ${user.userId}</h4>
        <h4>ID: ${user.id}</h4> 
        <h4>Title: ${user.title}</h4>
         <div><h4>Body:</h4> 
         ${user.body}
         </div>
        `
        output.appendChild(block)
    })
}
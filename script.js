const $container = document.getElementById('container')

let newElements = []

for (let i = 127789; i < 127799; i++) {
    newElements.push(`
    
    <div class="emoji">
        <p>
           &#${i};
        </p>
        <p>
            ${i}
        </p>
    </div>

    `)
}

$container.innerHTML = newElements.join('')

//conditionals lab
const $emojiList = document.querySelectorAll('.emoji')

for (let item of $emojiList) {

   if (item.children[1].textContent == 127797) {
        item.style.backgroundColor = 'lightgrey'
   }
}

//event listener
$container.addEventListener('click', function(event){
    const value = event.target.closest('div').children[1].textContent.trim()
    //console.log(value)

    if (value === '127789') {
        console.log('success')
    }
})
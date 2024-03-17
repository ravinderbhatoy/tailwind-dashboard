const passwordField = document.getElementById('password-input')

const eyeiconField = document.getElementById('eye-icon')


let isVisible = false

eyeiconField.innerHTML = `   <svg class="icon w-7 aspect-square">
<use xlink:href="eyes.svg#eye-svgrepo-com"></use>
</svg>`


// toggle password show

eyeiconField.addEventListener('click', ()=>{
    isVisible = !isVisible
    if(isVisible){
        eyeiconField.innerHTML = `  <svg class="icon w-7 aspect-square">
        <use xlink:href="eyes.svg#eye-closed-svgrepo-com"></use>
        </svg>` 
        passwordField.type = 'text'
    }else{
        eyeiconField.innerHTML =   `
        <svg class="icon w-7 aspect-square">
        <use xlink:href="eyes.svg#eye-svgrepo-com"></use>
      </svg>
        `
        passwordField.type = 'password'

    }
})


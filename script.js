const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (event) => {
    let errorMessages = []
    if (name.value === '' || name.value == null) {
        errorMessages.push('Name is required')
    }
    if (password.value.length <= 6) {
        errorMessages.push('Password must be longer than 6 characters')
    }
    if (password.value.length >= 20) {
        errorMessages.push('Password must be less than 20 characters')
    }
    if (password.value === 'password') {
        errorMessages.push('Password cannot be \'password\'')
    }
    if (errorMessages.length > 0) {
        event.preventDefault()
        errorElement.innerText = errorMessages.join(', ')
    }
})
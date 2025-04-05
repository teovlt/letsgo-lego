module.exports.signUpErrors = err => {
    let errors = { username: '', name: '', surname: '', email: '', password: '' }
    if (err.message.includes('pseudo')) errors.pseudo = 'Pseudo incorrect'
    if (err.message.includes('email')) errors.email = 'Email incorrect'
    if (err.message.includes('password')) errors.password = 'Le mot de passe doit faire 6 caractères minimum'
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo')) errors.pseudo = 'Ce pseudo est déjà pris'
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Cet email est déjà enregistré'
    return errors
}

module.exports.signInErrors = err => {
    let errors = { email: '', password: '' }
    if (err.message.includes('email')) errors.email = 'Email inconnu'
    if (err.message.includes('password')) errors.password = 'Le mot de passe ne correspond pas'
    return errors
}

module.exports.uploadErrors = err => {
    let errors = { format: '', maxSize: '' }

    if (err.message.includes('invalid file')) errors.format = 'Format incompatible'
    if (err.message.includes('maxSize')) errors.maxSize = 'Le fichier dépasse 10mo'

    return errors
}

module.exports.createAuctionErrors = err => {
    let errors = { startPrice: '' }

    if (err.message.includes('startPrice')) errors.startPrice = 'Le prix de départ est inférieur à zéro'

    return errors
}

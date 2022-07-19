export function roleFilter(role) {
    switch (role) {
        case 'ADMIN':
            return 'Administrateur.trice';
        case 'USER' :
            return 'Utilisateur.trice';
        default:
            return 'Fantôme';
    }
}
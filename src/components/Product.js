import PropTypes from 'prop-types';

export const Product = ({name, price, currency = '€', action}) => {

    function click() {
        if(action) {
            action('world')
        } else {
            console.log('no action')
        }
    }



    return (
        <div className="card" onClick={click}>
            <h3>{name}</h3>
            <p>Prix (HT): {price}{currency}</p>
            <p>Prix (TTC) {price * 1.2}{currency}</p>
        </div>
    )
}


export const ProductTyped = ({name, price, currency = '€', same_as}) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Prix (HT): {price}{currency}</p>
            <p>Prix (TTC) {price * 1.2}{currency}</p>
        </div>
    )
}

ProductTyped.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(['€', '$', 'CHF', '£', '¥']),
    same_as: PropTypes.arrayOf(PropTypes.string)
}



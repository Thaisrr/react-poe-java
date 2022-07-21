import {Product, ProductTyped} from "../components/Product";

const Props = function () {
    const abricot = {name: 'Abricot', price: '4'};

    function sayHello(msg) {
        console.log('Hello ' + msg)
    }


    return (
        <>
            <h1>Les Props</h1>

            <article>
                <h2>Présentation</h2>

                <div className="grid">
                    <Product id='toto' name={abricot.name} price={abricot.price}/>
                    <Product name="Fraises" price="6" currency="$"/>
                    <Product name="Framboises" price="sept" />
                    <Product price="Peches"  action={sayHello} />
                </div>

                <div className="grid">
                    <ProductTyped id='toto' name={abricot.name} price={abricot.price}/>
                    <ProductTyped name="Fraises" price="6" currency="$"/>
                    <ProductTyped name="Framboises" price="sept" />
                    <ProductTyped price="Peches" />
                </div>




            </article>

        </>

    )
}

export default Props;
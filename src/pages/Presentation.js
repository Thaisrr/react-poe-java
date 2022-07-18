const Presentation = () => {
    const message = 'Vive les JSX !!!';
    const jsx = <span>Du JSX depuis une variable</span>;
    const ma_class = 'red';
    const image_url = "https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif";

    const image = {
        name : "Space Sheep",
        description: "Un mouton dans l'espace",
        url: 'https://m.media-amazon.com/images/I/912htUd6agL._SS500_.jpg'
    }



    const size = 25;

    const style = {
        color: 'purple',
        fontSize: size + 'px',
        border: 'solid 2px black',
        borderTopLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    }

    const super_string = (
        'image =   {\n' +
        '               name : "Space Sheep",\n' +
        '               description: "Un mouton dans l\'espace",\n' +
        '               url: \'https://m.media-amazon.com/images/I/912htUd6agL._SS500_.jpg\'\n' +
        '           }'
    )


    return (
        <>
            <h1>Présentations</h1>

            <article>
                <h2>Les JSX</h2>

                <p>Les JSX sont extension syntaxique de Javascript. Ce n'est ni une chaîne une string ni du HTML.</p>
                <p>En React, on conseille d'utiliser les JSX pour retourner le template</p>

                <p>Les JSX permettent d'interpoler du JS à l'intérieur des balises, en utilisant des accolades.</p>
                <ul>
                    <li>Opération : 1 + 1 = { 1 + 1 }</li>
                    <li>Variables : {message}</li>
                    <li>Template Litteral ES6 (alt-gr + 7 ) {`Message : ${message}`}</li>
                    <li>String : {"Coucou en string brut"}</li>
                    <li>{jsx}</li>
                </ul>
                <p>Attention : certaines chaînes de caractères doivent être échappée pour pouvoir les afficher. </p>
                <p>C'est le cas des accolades : {'{'}{ '}'}</p>
                <p>Pour les crochets : {'<'}{'>'}</p>
            </article>

           <article>
               <h2>Les Attributs</h2>

               <p>Certains attributs HTML qui s'écrivent différemment en JSX.</p>
               <p>Le JSX est plus proche du JS que du HTML : les mots clefs réservés en JS ne peuvent pas être utilisés.</p>
               <p>De plus, en HTML, on peut être amené à utiliser du kebab-case, en JS le kebab-case est interdit,
                   il faut donc utiliser du camelCase.
               </p>
               <ul id="list" className="toto">
                   <li>class -> className</li>
                   <li>for -> htmlFor</li>
                   <li>tabindex -> tabIndex</li>
               </ul>

               <p>Les attributs HTML peuvent prendre en valeur une string, entre "" comme en HTML classique. : id="monid"</p>
               <p className={ma_class}>Mais ils peuvent également interpoler du JS, grâce aux accolades : className={'{'}ma_class} </p>

               <div className="img-container">
                   <img src={image_url} alt=""/>
               </div>

               <pre>{super_string}</pre>

               <figure>
                   <img src={image.url} alt={image.description}/>
                   <figcaption>{image.name}</figcaption>
               </figure>

               <ul>
                   <li>Style : <span style={{color: 'red'}}>Styled</span> </li>
                   <li style={style}>Pour passer du style, il suffit de passer un objet contenant les propriétés et les valeurs CSS</li>
                   <li style={{fontSize: size + 'px'}}>
                       Attention, les mots en kebab-case en CSS doivent être écrits en camelCase : font-size -{'>'} fontSize
                   </li>
               </ul>
           </article>

            <article>
                <h2>Images</h2>

                <p>Les images utilisées en CSS doivent être rangées dans src, et le chemin passé se fait depuis
                le fichier css.
                </p>

                <p>Les images utilisées dans les JSX doivent se trouver dans le répertoire public.</p>
                <p>Leur chemin ne sera dynamisé : ce sera transformé en chaîne de caractère, et donc buildé tel quel.</p>

            </article>

            <article>
                <h2>Style</h2>

                <p>Le fichier index.css est un fichier global, utilisé dans tous les composants.</p>
                <p>Pour importer du style dans un composant, il faut faire un import en haut du fichier composant.</p>
                <p>Le style d'un composant se répercute sur ses enfants</p>
            </article>

        </>
    )
}

export default Presentation;
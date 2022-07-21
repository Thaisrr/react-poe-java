import {useState} from "react";
import {func} from "prop-types";
import {useForm} from "react-hook-form";

const Formulaire = function () {

    const [book, setBook] = useState(`L'Assassin Royal`);
    const [bookError, setBookError] = useState(false);

    const [command, setCommand] = useState({});

    const {register, handleSubmit, formState: {errors}} = useForm();

    function saveUser(user) {
        console.log('User saved', user)
    }


    function saveBook(event) {
        event.preventDefault(event);
        const new_book = event.target?.book.value.trim();
        console.log(new_book);
        if(new_book) {
            setBook(new_book);
            setBookError(false);
            event.target.reset();
        } else {
            setBookError(true)
        }
    }

    function handleOrder(event) {
        event.preventDefault();
        const form = event.target;
        const new_order = {};


        // On exclue le dernier input, qui est le bouton de submit
        for(let i = 0; i < form.length - 1; i++) {
            const {name, type, checked, value} = form[i];
            if(name) {
                if( type === 'checkbox' ) {
                    if(checked) {
                        new_order[name] ||= [];
                        console.log(new_order)
                        new_order[name].push(value)
                    }
                } else if(type === 'radio') {
                    if(checked ) new_order[name] = value;
                } else {
                    new_order[name] = value;
                }
            }
        }
        setCommand(new_order);
    }

    return (
        <>
            <h1>Les formulaires</h1>

            <article>
                <h2>Formulaire simple</h2>

                <p>Votre livre préféré : <b>{book}</b></p>

                <form onSubmit={saveBook}>
                    <div>
                        <label htmlFor='book'>Favorite Book :</label>
                        <input id='book' name='book'/>
                        {bookError && <p style={{color: 'red'}}>Veuillez entrer un titre</p> }
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </article>

            <article>
                <h2>Formulaire plus complexe</h2>

                <form onSubmit={handleOrder}>

                    <div>
                        <label htmlFor="plat">Plat</label>
                        <input id='plat' name='plat'/>
                    </div>
                    <div>
                        <label htmlFor='quantity'>Quantité</label>
                        <input id='quantity' name='quantity' type='number'/>
                    </div>
                    <div>
                        <label htmlFor='dessert'>Dessert</label>
                        <select id='dessert' name='dessert'>
                            <option value=''>-- Choisir un dessert</option>
                            <option value='tiramisu'>Tiramisu</option>
                            <option value='fruits'>Salade de fruits</option>
                            <option value='glace'>Glace</option>
                        </select>
                    </div>

                    <fieldset>
                        <legend>Suppléments</legend>

                        <p>
                            <input id='sup1' name='sup' value='maroille' type='checkbox'/>
                            <label htmlFor='sup1'>Maroille</label>
                        </p>
                        <p>
                            <input id='sup2' name='sup' value='biere' type='checkbox'/>
                            <label htmlFor='sup2'>Biere</label>
                        </p>
                        <p>
                            <input id='sup3' name='sup' value='speculoos' type='checkbox'/>
                            <label htmlFor='sup3'>Speculoos</label>
                        </p>
                    </fieldset>

                    <fieldset>
                        <legend>Sur place ou à emporter ?</legend>

                        <p>
                            <input id='p1' type='radio' name='place' value='place'/>
                            <label htmlFor='p1'>Sur place</label>
                        </p>
                        <p>
                            <input id='p2' type='radio' name='place' value='away'/>
                            <label htmlFor='p2'>A emporter</label>
                        </p>

                    </fieldset>

                    <p>
                        <button>Valider la commande</button>
                    </p>

                </form>

                <p>{JSON.stringify(command)}</p>
            </article>

            <article>
                <h2>React  Hook Form</h2>

                <p><code>npm install react-hook-form</code></p>


                <form onSubmit={handleSubmit(saveUser)}>

                    <div>
                        <label htmlFor='name'>Nom</label>
                        <input id='name' {...register('name', {required: true})}/>
                        {errors.name && <p className='error'>Veuillez entrer un nom</p>}
                    </div>
                    <div>
                        <label htmlFor='firstname'>Prénom</label>
                        <input id='firstname'
                               {...register('firstname', {
                                   required: 'Vous devez entrer un prénom',
                                   minLength : {value: 2, message: 'Votre prénom ne semble pas correct ( minimum 2 caractères )'}
                               })}
                        />
                        <p className="error">{errors.firstname?.message}</p>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id='email' {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                        {errors.email && errors.email.type === 'required' && <p className="error">Veuillez entrer une adresse mail</p>}
                        {errors.email && errors.email.type === 'pattern' && <p className="error">Votre adresse semble invalide</p> }
                    </div>
                    <div>
                        <label htmlFor='title'>Titre</label>
                        <select id='title' {...register('title')}>
                            <option value="mr">Monsieur</option>
                            <option value="mme">Madame</option>
                            <option value="emperor">Empereur</option>
                            <option value="empress">Impératrice</option>
                        </select>
                    </div>
                    <fieldset>
                        <legend>Pronoms</legend>
                        <div>
                            <label htmlFor='pr1'>He / Him</label>
                            <input id="pr1" value='he' type='radio' {...register('pronouns')}/>
                        </div>
                        <div>
                            <label htmlFor='pr2'>She / Her</label>
                            <input id="pr2" value='she' type='radio' {...register('pronouns')}/>
                        </div>
                        <div>
                            <label htmlFor='pr3'>Them / They</label>
                            <input id="pr3" value='them' type='radio' {...register('pronouns')}/>
                        </div>
                    </fieldset>

                    <button>Save</button>
                </form>

            </article>
        </>
    )
}
export default Formulaire;
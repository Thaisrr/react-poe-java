import {useForm} from "react-hook-form";
import {create} from "../utils/services/UserService";


export const UserForm = function ({reload}) {
    const {handleSubmit, register} = useForm();

    async function save(user) {
       await create(user);
        reload();
    }

    return (
        <>
            <h2>New User</h2>

            <form onSubmit={handleSubmit(save)}>
                <p>
                    <label htmlFor='last_name'>Lastname</label>
                    <input id='last_name' {...register('last_name')}/>
                </p>
                <p>
                    <label htmlFor='first_name'>firstname</label>
                    <input id='first_name' {...register('first_name')}/>
                </p>
                <p>
                    <label htmlFor='email'>Email</label>
                    <input id='email' {...register('email')}/>
                </p>
                <p>
                    <label htmlFor='gender'>Gender</label>
                    <select id='gender' {...register('gender')}>
                        <option value=''>-- Choose a gender</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                        <option value='Genderfluid'>Genderfluid</option>
                        <option value='Agender'>Agender</option>
                        <option value='Other'>Other</option>
                    </select>
                </p>

                <p>
                    <button type='submit'>Save</button>
                </p>
 
            </form>
        </>
    )
}
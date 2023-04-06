import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { User } from 'types/types';
import './styles.css';

const RegisterForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<User>();

    const history = useHistory();

    const onSubmit = (formData : User) => {
        
        formData.roles = [ {id:1, authority:"ROLE_OPERATOR"} ]; // todo usuário recém registrado começa como operator

        const params : AxiosRequestConfig = {
            method: "POST",
            url : "/users",
            data: formData,
            withCredentials: false
        };

        requestBackend(params)
            .then(response => {
                console.log('Success', response.data);
                history.push("/admin/auth/login");
            })
    };

    const handleCancel = () => {
        history.push("/")
    }

    return(
        <div className="register-crud-container">
            <div className="base-card register-card-form-card">
                <h1>REGISTER</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row register-crud-inputs-container'>
                        <div className='col-lg-12 register-crud-inputs-left-container'>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"black"}}>Name</label>
                                <input 
                                    {...register("name", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Name"
                                    name="name"
                                />
                                <div className='invalid-feedback d-block'>{errors.name?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"black"}}>Email</label>
                                <input 
                                    {...register("email", {
                                    pattern: { 
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Insira um Email válido'
                                        }
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email"
                                    name="email"
                                />
                                <div className='invalid-feedback d-block'>{errors.email?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"black"}}>Password</label>
                                <input 
                                    {...register("password", {
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    name="password"
                                />
                                <div className='invalid-feedback d-block'>{errors.password?.message}</div>

                            </div>
                        </div>

                        <div className='register-crud-buttons-container'>
                            <button 
                                className='btn btn-outline-danger register-crud-buttons'
                                onClick={handleCancel}
                                >
                                CANCELAR
                            </button>

                            <button className='btn btn-primary text-white register-crud-buttons'>SALVAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;
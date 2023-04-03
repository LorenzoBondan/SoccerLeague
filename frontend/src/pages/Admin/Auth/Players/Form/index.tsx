import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { Player, Team } from 'types/types';


type UrlParams = {
    playerId: string;
}

const Form = () => {

    const { playerId } = useParams<UrlParams>();
    
    const isEditing = playerId !== 'create';

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<Player>();

    const [selectTeams, setSelectTeams] = useState<Team[]>();

    //trazer os teams pra povoar o combobox
    useEffect(() => {
        requestBackend({url: '/teams/a', params: {page: 0, size: 20, },})
            .then(response => {
                setSelectTeams(response.data.content)
            })
    }, []);

    //carregar as textboxes com os valores do estudante a ser editado
    useEffect(() => {
        if (isEditing) {
            requestBackend({url:`/players/${playerId}`})
                .then((response) => {

                    const player = response.data as Player;

                    setValue('name', player.name);
                    setValue('nickname', player.nickname);
                    setValue('birthDate', player.birthDate);
                    setValue('position', player.position);
                    setValue('imgUrl', player.imgUrl);
                    setValue('teamId', player.teamId);
                })
        }
    }, [isEditing, playerId, setValue]);

    const history = useHistory();

    const onSubmit = (formData : Player) => {

        // data: formData
        const params : AxiosRequestConfig = {
            method: isEditing? "PUT" : "POST",
            url: isEditing? `/players/${playerId}` : "/players",
            data: formData,
            withCredentials: true
          };

        requestBackend(params)
        .then(response => {
            console.log('SUCCESS', response.data);
            history.push("/admin/players");

            /*toast.success('Student cadastrado com sucesso!');*/
        })
        .catch(() => {
            console.log('error');
        })
        ;
    };

    // botão de cancelar -> reenvia o usuário para a lista de produtos, saindo do form
    const handleCancel = () => {
        history.push("/admin/players")
    }

    const teamsIds = selectTeams?.map(team => team.id)

    
    return(
        <div className="players-crud-container">

            <div className="base-card players-card-form-card">
                <h1>ADD OR EDIT PLAYER</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row players-crud-inputs-container'>
                        <div className='col-lg-6 players-crud-inputs-left-container'>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Name</label>  
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
                                <label htmlFor="" style={{color:"white"}}>Nickname</label>  
                                <input 
                                    {...register("nickname", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.nickname ? 'is-invalid' : ''}`}
                                    placeholder="Nickname"
                                    name="nickname"
                                />
                                <div className='invalid-feedback d-block'>{errors.nickname?.message}</div>

                            </div>


                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Birth Date</label>  
                                <input 
                                    {...register("birthDate", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.birthDate ? 'is-invalid' : ''}`}
                                    placeholder="BirthDate"
                                    name="birthDate"
                                />
                                <div className='invalid-feedback d-block'>{errors.birthDate?.message}</div>

                            </div>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Position</label>  
                                <input 
                                    {...register("position", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.position ? 'is-invalid' : ''}`}
                                    placeholder="Position"
                                    name="position"
                                />
                                <div className='invalid-feedback d-block'>{errors.position?.message}</div>

                            </div>


                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Img Url</label>  
                                <input 
                                    {...register("imgUrl", {
                                    required: 'Campo obrigatório',
                                    pattern: { 
                                        value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                                        message: 'Insira uma URL válida'
                                    }
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.imgUrl ? 'is-invalid' : ''}`}
                                    placeholder="URL of Player's image"
                                    name="imgUrl"
                                />
                                <div className='invalid-feedback d-block'>{errors.imgUrl?.message}</div>

                            </div>



                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Team Id</label>  
                                <select
                                    {...register("teamId", {
                                        required: 'Campo obrigatório',
                                    })}
                                    className={`form-control base-input ${errors.teamId ? 'is-invalid' : ''}`}
                                    placeholder='Team Id' 
                                    name="teamId"
                                    >
                                    {teamsIds?.sort((a,b) => a > b ? 1 : -1).map(id => <option key={id} value={id}>{id}</option>)}
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className='players-crud-buttons-container'>
                        <button 
                            className='btn btn-outline-danger players-crud-buttons'
                            onClick={handleCancel}
                            >
                            CANCEL
                        </button>

                        <button className='btn btn-primary text-white players-crud-buttons'>SAVE</button>

                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default Form;
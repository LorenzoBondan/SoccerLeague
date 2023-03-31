import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { requestBackend } from 'util/requests';
import { Team } from 'types/types';
import './styles.css';

type UrlParams = {
    teamId: string;
}

const Form = () => {

    const { teamId } = useParams<UrlParams>();

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<Team>();

    //carregar as textboxes com os valores do estudante a ser editado
    useEffect(() => {

            requestBackend({url:`/teams/team/${teamId}`})
                .then((response) => {

                    const team = response.data as Team;

                    setValue('name', team.name);
                    setValue('serie', team.serie);
                    setValue('members', team.members);
                    setValue('internationalCups', team.internationalCups);
                    setValue('continentalCups', team.continentalCups);
                    setValue('nationalLeagues', team.nationalLeagues);
                    setValue('nationalCups', team.nationalCups);
                    setValue('imgUrl', team.imgUrl);

                    setValue('points', team.points);
                    setValue('games', team.games);
                    setValue('victories', team.victories);
                    setValue('draws', team.draws);
                    setValue('defeats', team.defeats);
                    setValue('goalsConceded', team.goalsConceded);
                    setValue('goalsScored', team.goalsScored);

                })
        }, [teamId, setValue]);

    const history = useHistory();

    const onSubmit = (formData : Team) => {

        // data: formData
        const params : AxiosRequestConfig = {
            method: "PUT",
            url: `/teams/team/${teamId}`,
            data: formData,
            withCredentials: true
          };

        requestBackend(params)
        .then(response => {
            console.log('SUCCESS', response.data);
            history.push("/admin/teams");
        })
        .catch(() => {
            console.log("error");
        });
    };

    // botão de cancelar -> reenvia o usuário para a lista de produtos, saindo do form
    const handleCancel = () => {
        history.push("/admin/teams")
    }

    return(
        <div className="teams-crud-container">

            <div className="base-card teams-card-form-card">
                <h1>EDIT TEAMS</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row teams-crud-inputs-container'>
                        <div className='col-lg-6 teams-crud-inputs-left-container'>

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
                                <label htmlFor="" style={{color:"white"}}>Serie</label>                          
                                <input 
                                    {...register("serie", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.serie ? 'is-invalid' : ''}`}
                                    placeholder="Serie"
                                    name="serie"
                                />
                                <div className='invalid-feedback d-block'>{errors.serie?.message}</div>
                            </div>
                            
                            <div className='margin-bottom-30'>    
                                <label htmlFor="" style={{color:"white"}}>Members</label>                       
                                <input 
                                    {...register("members", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.members ? 'is-invalid' : ''}`}
                                    placeholder="Members"
                                    name="members"
                                />
                                <div className='invalid-feedback d-block'>{errors.members?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>International Cups</label>                          
                                <input 
                                    {...register("internationalCups", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.internationalCups ? 'is-invalid' : ''}`}
                                    placeholder="International Cups"
                                    name="internationalCups"
                                />
                                <div className='invalid-feedback d-block'>{errors.internationalCups?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>   
                                <label htmlFor="" style={{color:"white"}}>Continental Cups</label>                          
                                <input 
                                    {...register("continentalCups", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.continentalCups ? 'is-invalid' : ''}`}
                                    placeholder="Continental Cups"
                                    name="continentalCups"
                                />
                                <div className='invalid-feedback d-block'>{errors.continentalCups?.message}</div>
                            </div>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>National Leagues</label>                          
                                <input 
                                    {...register("nationalLeagues", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.nationalLeagues ? 'is-invalid' : ''}`}
                                    placeholder="National Leagues"
                                    name="nationalLeagues"
                                />
                                <div className='invalid-feedback d-block'>{errors.nationalLeagues?.message}</div>
                            </div>

                            <div className='margin-bottom-30'>   
                                <label htmlFor="" style={{color:"white"}}>National Cups</label>                           
                                <input 
                                    {...register("nationalCups", {
                                    required: 'Campo obrigatório',
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.nationalCups ? 'is-invalid' : ''}`}
                                    placeholder="National Cups"
                                    name="nationalCups"
                                />
                                <div className='invalid-feedback d-block'>{errors.nationalCups?.message}</div>
                            </div>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>URL of Team's image</label>                                
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
                                    placeholder="URL of Team's image"
                                    name="imgUrl"
                                />
                                <div className='invalid-feedback d-block'>{errors.imgUrl?.message}</div>
                            </div>

                        </div>

                        <div className='col-lg-6'>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>Points</label>                        
                                <input 
                                    {...register("points", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.points ? 'is-invalid' : ''}`}
                                    placeholder="Points"
                                    name="points"
                                />
                            </div>

                            <div className='margin-bottom-30'>  
                                <label htmlFor="" style={{color:"white"}}>Games</label>                               
                                <input 
                                    {...register("games", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.games ? 'is-invalid' : ''}`}
                                    placeholder="Games"
                                    name="games"
                                />
                            </div>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>Victories</label>                             
                                <input 
                                    {...register("victories", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.victories ? 'is-invalid' : ''}`}
                                    placeholder="Victories"
                                    name="victories"
                                />
                            </div>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>Draws</label>                           
                                <input 
                                    {...register("draws", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.draws ? 'is-invalid' : ''}`}
                                    placeholder="Draws"
                                    name="draws"
                                />
                            </div>

                            <div className='margin-bottom-30'>   
                                <label htmlFor="" style={{color:"white"}}>Defeats</label>                           
                                <input 
                                    {...register("defeats", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.defeats ? 'is-invalid' : ''}`}
                                    placeholder="Defeats"
                                    name="defeats"
                                />
                            </div>

                            <div className='margin-bottom-30'> 
                                <label htmlFor="" style={{color:"white"}}>Goals Scored</label>                                 
                                <input 
                                    {...register("goalsScored", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.goalsScored ? 'is-invalid' : ''}`}
                                    placeholder="Goals Scored"
                                    name="goalsScored"
                                />
                            </div>

                            <div className='margin-bottom-30'>
                                <label htmlFor="" style={{color:"white"}}>Goals Conceded</label> 
                                <input 
                                    {...register("goalsConceded", {
                                    })}
                                    type="number"
                                    className={`form-control base-input ${errors.goalsConceded ? 'is-invalid' : ''}`}
                                    placeholder="Goals Conceded"
                                    name="goalsConceded"
                                />
                            </div>

                        </div>
                    </div>

                    <div className='teams-crud-buttons-container'>
                        <button 
                            className='btn btn-outline-danger teams-crud-buttons'
                            onClick={handleCancel}
                            >
                            CANCEL
                        </button>

                        <button className='btn btn-primary text-white teams-crud-buttons'>SAVE</button>

                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default Form;
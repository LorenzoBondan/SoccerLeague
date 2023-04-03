import { Team, User } from 'types/types';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

import './styles.css';
import { useForm } from 'react-hook-form';

type Props ={
    userEmail: string | undefined;
}

const ProfileCard = ({userEmail} : Props) => {

    const [page, setPage] = useState<User>();

    const getUser = useCallback(() => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: `/users/email/${userEmail}`,
          withCredentials:true
        }
    
        requestBackend(params) 
          .then(response => {
            setPage(response.data);
          })
      }, [userEmail])
  
      useEffect(() => {
        getUser();
      }, [getUser]);

      //

      const [team, setTeam] = useState<Team>();

    const getTeamById = useCallback( (id : number) => {
        const params : AxiosRequestConfig = {
          method:"GET",
          url: `/teams/team/${id}`
        }
    
        requestBackend(params) 
          .then(response => {
            setTeam(response.data);
          })
      }, [])
  
      useEffect(() => {
        page && 
         (getTeamById(page.favoriteTeamId));
      }, [getTeamById, page]);

      //

      const [showSelect, setShowSelect] = useState(false);

      const [selectTeams, setSelectTeams] = useState<Team[]>();

      const { register, handleSubmit, formState: {errors} } = useForm<User>();

    //trazer os teams pra povoar o combobox
    useEffect(() => {
        requestBackend({url: '/teams/a', params: {page: 0, size: 20, },})
            .then(response => {
                setSelectTeams(response.data.content)
            })
    }, []);

    const onSubmit = (formData : User) => {
        // data: formData
        
        page && (
            formData.name = page?.name
        );
        page && (
        formData.email = page?.email
        );
        page && (
            formData.password = page?.password
        );
        page && (
            formData.roles = page?.roles
        );

        const params : AxiosRequestConfig = {
            method: "PUT",
            url: `/users/${page?.id}`,
            data: formData,
            withCredentials: true
          };

        requestBackend(params)
        .then(response => {
            console.log('SUCCESS', response.data);
            getUser();
        })
        .catch(() => (
            console.log('error :', params.data)
        ))
    };

    return(
        <div className='profile-card-container base-card'>
            <div className='profile-card-content-container'>
                <h1>{page?.name}</h1>
                <h4>Email: {page?.email}</h4>
            </div>
            <div className='profile-card-team-container'>
                <h2>Favorite Team</h2>
                <img src={team?.imgUrl} alt="" />

                <button onClick={() => setShowSelect(true)} className='btn btn-primary'>
                    Select another Team as favorite
                </button>

                {showSelect && 
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Choose Team</label>
                        <select
                            {...register("favoriteTeamId", {
                            required: 'Campo obrigatório',
                            })}
                            className={`form-control base-input ${errors.favoriteTeamId ? 'is-invalid' : ''}`}
                            placeholder='Team' 
                            name="favoriteTeamId"
                            >
                            {selectTeams?.sort((a,b) => a.name > b.name ? 1 : -1).map(team => <option key={team.id} value={team.id}>{team.name}</option>)}
                        </select>

                        <button className='btn btn-primary'>Save</button>
                    </form>
                }
            </div>

        </div>
    );
}

export default ProfileCard;
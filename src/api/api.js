import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8c22e4e3-27db-4208-b0f3-9e32e145fb57'
    }
});

export const usersAPI = {
 getUsers (currentPage = 1, pageSize = 25) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`))
            .then(response => {
                return response.data;
            });
    },
    Follow(userId){
        return instance.post(`follow/${userId}`)
    },
    UnFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn("Пожалуйста Используйте profileAPI объект")
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status});
    }

}

export const authAPI = {
    me () {
           return (instance.get(`auth/me`));
       },
    login (email, password, rememberMe = false) {
        return (instance.post(`auth/login`, { email, password, rememberMe }));
    },
    logout (){
        return (instance.delete(`auth/login`));
    },
   }
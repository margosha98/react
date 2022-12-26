import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'c0992451-e99b-40d6-be36-6bd116f8f9dc'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers (pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    toUnfollowRequest (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    toFollowRequest (userId) {
        return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data
        })
    }

}

export const headerAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}



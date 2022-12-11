import axios from "axios";
const apiClient = axios.create({
    baseURL:"https://my-json-server.typicode.com/GhassenAhmed/movie3",
    withCredentials:false,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
})
export default {
    getUpcomings(){
        return apiClient.get("/upcoming");
    },
    getUpcoming(id){
        return apiClient.get("/upcoming/"+id);
    },
    getPopulaires(){
        return apiClient.get("/populaire");
    },
    getPopulaire(id){
        return apiClient.get("/populaire/"+id);
    }
}
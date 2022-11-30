import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzkxZTQ1NGNlNjgzZTQ5NTIzM2RlZTgwYjM2ODVkOCIsInN1YiI6IjYwM2I2MmQxY2I1YzhlNjQ2ZTIxZGU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FwsMq_s8J1MVZgU3SaOMbWnYQKEHbJ3_1tQwpPYP5i4";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})
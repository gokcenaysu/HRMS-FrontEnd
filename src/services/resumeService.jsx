import axios from "axios"

export default class ResumeService{
    add(){
        return axios.get("http://localhost:8080/api/resume/add")
    }
}
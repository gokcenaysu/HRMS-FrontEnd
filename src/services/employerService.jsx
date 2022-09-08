import axios from "axios"

export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:8080/api/employer/getAll")
    }

    register(){
        return axios.get("http://localhost:8080/api/employer/register")
    }

    login(){
        return axios.get("http://localhost:8080/api/employer/login")
    }

    getId(){
        return axios.get("http://localhost:8080/api/employer/{id}")
    }

    delete(){
        return axios.get("http://localhost:8080/api/employer/delete")
    }
}
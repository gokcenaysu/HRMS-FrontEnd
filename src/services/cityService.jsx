import axios from "axios"

export default class CityService{
    getCity(){
        return axios.get("http://localhost:8080/api/city/getAll")
    }

    add(){
        return axios.get("http://localhost:8080/api/city/add")
    }

    delete(){
        return axios.get("http://localhost:8080/api/city/delete")
    }

    getId(){
        return axios.get("http://localhost:8080/api/city/{id}")
    }
}
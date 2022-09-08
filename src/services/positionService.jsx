import axios from "axios"

export default class PositionService{
    getPosition(){
        return axios.get("http://localhost:8080/api/position/getAll")
    }

    getId(){
        return axios.get("http://localhost:8080/api/position/{id}")
    }

    sortedAsc(){
        return axios.get("http://localhost:8080/api/position/sortedAsc")
    }

    contain(){
        return axios.get("http://localhost:8080/api/position/contain")
    }

    getAllByPage(){
        return axios.get("http://localhost:8080/api/position/getAllByPage")
    }

    add(){
        return axios.get("http://localhost:8080/api/position/add")
    }

    delete(){
        return axios.get("http://localhost:8080/api/position/delete")
    }
}
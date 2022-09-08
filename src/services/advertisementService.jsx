import axios from "axios"

export default class AdvertisementService{
        getAdvertisement(){
            return axios.get("http://localhost:8080/api/advertisement")
        }

        sortedAsc(){
            return axios.get("http://localhost:8080/api/advertisement/sortedAsc")
        }

        getId(){
            return axios.get("http://localhost:8080/api/advertisement/{id}")
        }

        getActivityStatus(){
            return axios.get("http://localhost:8080/api/advertisement/getByActivityStatus")
        }

        orderByCreationDate(){
            return axios.get("http://localhost:8080/api/advertisement/orderByCreationDate")
        }

        orderByApplicationDeadline(){
            return axios.get("http://localhost:8080/api/advertisements/orderByApplicationDeadline")
        }

        orderByCompany(){
            return axios.get("http://localhost:8080/api/advertisements/getByCompany/{id}")
        }

        add(){
            return axios.get("http://localhost:8080/api/advertisement/add")
        }

        delete(){
            return axios.get("http://localhost:8080/api/advertisement/delete")
        }
}
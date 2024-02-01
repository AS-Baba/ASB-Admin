import axios from "axios";
import { createContext } from "react";

class HttpInterceptor {
  constructor() {
    this.stat = true;
    this.axiosInstance = axios.create();

    this.axiosInstance.interceptors.request.use(
      this.handleRequest,
      this.handleRequestError
    );
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this,
      this.handleResponseError
    );
    
  }

  handleRequest(config) {
    const token = window.localStorage.getItem("token");

    if(token){

      config.headers.authorization = `Token ${token}`;
    }
  

    
    return config;
  }

  handleRequestError(error) {
    console.log(error)
    return error;
  }

  handleResponse(response) {
    // this.setState({isSpinner:true})
    
    return response;
  }

  handleResponseError(error) {
    return error;
  }
 
 
  handleSpinner(){
    return this.stat
  }
}


export default HttpInterceptor
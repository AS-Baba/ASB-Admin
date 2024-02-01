// import { ServerUrl } from "../Component/ServerUrl";
import { ServerUrl } from "../Component/ServerUrl";
import HttpInterceptor from "../Component/axiosConfig";



class Services {
  constructor(){
    this.httpInterceptor = new HttpInterceptor()
  }
  registerUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const resp = await this.httpInterceptor.axiosInstance.post(
        ServerUrl + "/users/register/",
        data,
        config
      );
      return resp;
    } catch (error) {
      console.log(error.response);
    }
  };
  
  loginUser = async (data) => {
    
    try {
      const resp = await this.httpInterceptor.axiosInstance.post(ServerUrl + "/users/login", data);
      return resp;
    } catch (error) {
      console.log(error.response);
    }
  };


  getUsers = async () => {
    try {
      const resp = await this.httpInterceptor.axiosInstance.get(ServerUrl + "/users");
      return resp;
    } catch (error) {
      return error;
    }
  };
   loadUser = async (id) => {
    try {
      const resp = await this. httpInterceptor.axiosInstance.get(ServerUrl + "/users/get-user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  };


  deleteUsers = async (id) => {
    try {
      const resp = await this.httpInterceptor.axiosInstance.delete(ServerUrl +  "/users/delete?id=" + id);
      return resp;
    } catch (error) {
      return error;
    }
  };


  editUsers = async (id,user) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const resp = await this.httpInterceptor.axiosInstance.patch(ServerUrl +  "/users/edit?id=" + id,user,config);
      return resp;
    } catch (error) {
      return error;
    }
  };


  logOut = async (id) => {
    try {
      const resp = await this.httpInterceptor.axiosInstance.get(ServerUrl +  "/users/logout/");
      return resp;
    } catch (error) {
      return error;
    }
  };
}

export default Services;

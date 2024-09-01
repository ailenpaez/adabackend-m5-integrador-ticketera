import {Request, Response} from "express";

//SERVICES

import UsersService from "../services/users";

class UsersController{

    static getAllUsers(req:Request, res: Response){

        const users = UsersService.getAllUsers();

        res.status(200).json({data: users});

    }
}


export default UsersController;
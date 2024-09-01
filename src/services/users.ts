
//MODEL

import UsersModel from "../model/users"

class UsersService{
    static getAllUsers(){

        const users = UsersModel.getAllUsers()
        return users

    }
}

export default UsersService;
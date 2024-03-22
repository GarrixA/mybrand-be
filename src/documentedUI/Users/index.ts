import getUsers from "./getUsers";
import addUser from "./registerUser";
import loginUser from "./login";
import getSingleUser from "./gettUserById";
import deleteUser from "./deleteUser";
import updateUser from "./updateUser";


export default {

    paths: {

        '/api/v1/users': {
            ...getUsers,

        },
        '/api/v1/users/{id}': {
            ...getSingleUser,
            ...deleteUser,
            ...updateUser
        },
        '/api/v1/users/register': {
            ...addUser,
        },
        '/api/v1/user/login': {
            ...loginUser,
        },
    
      
    },
};
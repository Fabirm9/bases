

const users = [
    {
        id:1,
        name: 'Jhon Doe'
    },
    {
        id:2,
        name: 'Xime Doe'
    },
]


const getUserById = (id, callback) => {
    const user = users.find( (user) =>  user.id ===id);

    (user) 
    ? callback(null, user)
    : callback(`user not found with id ${id}`);   
    
}


module.exports = {
    getUserById
}
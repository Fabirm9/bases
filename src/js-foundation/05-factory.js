// const {getAge,getUuid} = require('../plugins')


const buildMakePerson = ({ getUuid, getAge }) =>{

    return ({name, birthdate}) => {
        return {
            id: getUuid(),
            name:name,
            birthdate:birthdate,
            age: getAge(birthdate)
        }
    }
}




// const obj= {
//     name:'Johne', birthdate:'1993-03-01'
// };
// const john = buildPerson(obj);

// console.log(john);


module.exports ={
    buildMakePerson
}

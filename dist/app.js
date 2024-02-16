"use strict";
//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring')
//const {getUserById} =require('./js-foundation/03-callbacks');
// const {getAge,getUuid} = require('./plugins');
// const {buildMakePerson} = require('./js-foundation/05-factory');
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const heroe_services_1 = require("./services/heroe.services");
//const getPokemonbyId = require('./js-foundation/06-promises')
// const {buildLogger} = require('./plugins');
// const logger = buildLogger('app.js');
// logger.log('hello world');
// logger.error('this is any bad');
//console.log(emailTemplate, "test");
// const id = 2;
// getUserById(id, (error,user) => {
//     if (error){
//         throw new Error(error)
//     }
//     getUserById(2, (error,user2)=>{
//         if (error){
//             throw new Error(error)
//         }
//         console.log({user,user2});
//     })
// } );
// const makePerson = buildMakePerson({getUuid,getAge})
// const obj= {
//     name:'Johne', birthdate:'1993-03-01'
// };
// const john = makePerson(obj);
// console.log(john);
// getPokemonbyId(4)
// .then( (pokemon) => console.log(pokemon))
// .catch( (err) => console.error('por favor intente de nuevo') )
// .finally( () =>  console.log('finalmente'))
const heroe = (0, heroe_services_1.findHeroById)(2);
console.log((_a = heroe === null || heroe === void 0 ? void 0 : heroe.name) !== null && _a !== void 0 ? _a : 'Heroe not found');

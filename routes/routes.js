import express from 'express';
import  { addUser, getUsers } from '../controller/userController';

const route  = express.Router();

route.get('/usuarios', getUsers);
route.post('/usuarios/crear', addUser)

export default route;
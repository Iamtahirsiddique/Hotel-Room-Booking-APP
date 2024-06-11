import express from 'express'
import { createUser,getUserById,getAllUsers,updateUser,deleteUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication',verifyToken,(req,res,next)=>{
    res.send("Hello user! You are logged in.")
});

// create users
router.post('/', createUser);

// get user by id
router.get('/:id',getUserById);

// update user
router.put('/:id',updateUser);

// get all users
router.get('/',getAllUsers);

// delete user

router.delete('/:id',deleteUser)
 export default router
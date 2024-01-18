import { Router } from "express";
import * as ApiControlers from '../Controllers/ApiControllers'


const router = Router();


router.get('/all', ApiControlers.AllProdutos)
router.post('/create' , ApiControlers.CreateProduto)
router.put('/update/:id',ApiControlers.UpdateProduto)
router.delete('/delete/:id')


export default router
import {Router} from "express";
import getGrocerlyList from '../controllers/grocerController.js'

const router = Router({mergeParams:true});

router.get('/', getGrocerlyList);

export default router;
import express from 'express';
import { getMessages } from '../controller/MessagesController.js';

const router = express.Router();

router.get('/', getMessages);

export default router;
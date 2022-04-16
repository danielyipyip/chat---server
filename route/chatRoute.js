const express = require('express');

const router = express.Router();

router.get('/', getMessages);

export default router
var createError = require('http-errors');
const express = require('express'),
    router = express.Router();

const taskList = [
    { id : 1, name : 'Explore Pune', isCompleted : false },
    { id: 2, name: 'Watch Darbar', isCompleted: true }
];

router.get('/', (req, res, next) => {
    res.json(taskList);
});

router.get('/:id', (req, res, next) => {
    const taskId = parseInt(req.params.id);
    const resultTask = taskList.find(task => task.id === taskId);
    if (!resultTask){
        next(createError(404))
    } else {
        res.json(resultTask);
    }
});

module.exports = router;
const UsersController = require('../controllers/userController');
const TodosController = require('../controllers/todosController');
const router = require('express').Router();
const authorization = require('../middlewares/authorization')

const usersController = new UsersController();
const todosController = new TodosController();

// user
router.post('/register', usersController.postUserHandler);
router.post('/login', usersController.loginController)
router.get('/user', usersController.getUserHandler)
router.get('/user/:id', usersController.getUserByIdHandler)
router.get('/is-verify', authorization, usersController.verifyController)
router.post('/dashboard', authorization, usersController.dashboardController)

// todos
router.post('/todos', todosController.postTodosHandler);
router.get('/todos',authorization, todosController.getTodosHandler);
router.put('/todos', todosController.putTodosHandler);
router.delete('/todos', todosController.deleteTodosHandler);

module.exports = router;
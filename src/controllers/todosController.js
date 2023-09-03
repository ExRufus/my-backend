const { Todos } = require('../../models');
const autoBind = require('auto-bind');

class TodosController {
  constructor() {
    autoBind(this);
  }

  // Create a new todo
  async postTodosHandler(req, res) {
    try {
      const { title, completed, user_id } = req.body;
      const newTodo = await Todos.create({
        title,
        completed,
        user_id,
      });

      return res.status(201).json({
        status: 'success',
        data: newTodo,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami',
      });
    }
  }

  // Read all todos
  async getTodosHandler(req, res) {
    try {
      const todos = await Todos.findAll();

      return res.status(200).json({
        status: 'success',
        data: todos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami',
      });
    }
  }

  // Update a todo by ID
  async putTodosHandler(req, res) {
    try {
      const { id } = req.params;
      const { title, completed, user_id } = req.body;
      const updatedTodo = await Todos.update(
        {
          title,
          completed,
          user_id,
        },
        {
          where: {
            id,
          },
        }
      );

      if (updatedTodo[0] === 0) {
        // No todo with the given ID found
        return res.status(404).json({
          status: 'fail',
          message: 'Todo not found',
        });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Todo updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami',
      });
    }
  }

  // Delete a todo by ID
  async deleteTodosHandler(req, res) {
    try {
      const { id } = req.params;
      const deletedTodo = await Todos.destroy({
        where: {
          id,
        },
      });

      if (deletedTodo === 0) {
        // No todo with the given ID found
        return res.status(404).json({
          status: 'fail',
          message: 'Todo not found',
        });
      }

      return res.status(204).send(); // No content
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami',
      });
    }
  }
}

module.exports = TodosController;

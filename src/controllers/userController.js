const { User, Todos } = require('../../models')
const autoBind = require('auto-bind');
const { validateUserPayload } = require('../validators/users/index');
const ClientError = require('../exceptions/ClientError');
const AuthenticationError = require('../exceptions/AuthenticationError')
const NotFoundError = require('../exceptions/NotFoundError');
const jwtGenerator = require('../middlewares/auth');

class UsersController {
  constructor() {
    autoBind(this)
  }

  async postUserHandler(req, res) {
    try {
      validateUserPayload(req.body);
      const createdUser = await User.create(req.body);
  
      const userCode = createdUser.code;
  
      const token = jwtGenerator(userCode);
  
      return res.status(200).json({
        message: 'success',
        data: createdUser,
        token
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami'
      });
    }
  }

  async getUserByIdHandler(req, res) {
    
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Todos
          }
        ]
      });
   
      res.status(200).json({
        status: 'success',
        data: user
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami'
      });
    }
  }
  
  async getUserHandler(req, res) {
    const users = await User.findAll()

    res.status(200).json({
      status: 'success',
      data: users
    });
  }

  async loginController(req, res) {
    const { code } = req.body;
    try {
      const user = await User.findOne({
        where: {
          code,
        }, 
      });

      if (!user) {
        throw new NotFoundError(user.error.message)
      }

      const token = jwtGenerator(user.code);

      res.status(200).json({
        message: 'success',
        data: user,
        token
      })
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami'
      });
    }
  }

  async verifyController(req, res) {
    try {
      res.json(true)
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami'
      });
    }
  }

  async dashboardController(req, res) {
    try {
      if (!req.user) {
        throw new AuthenticationError('Anda belum terotentikasi. Silakan login terlebih dahulu.');
      }

      const user = await User.findOne({
        where: {
          code: req.user,
        },
        attributes: ['username', 'email', 'city'],
      });

      res.json(user);
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami'
      });
    }
  }
}

module.exports = UsersController;
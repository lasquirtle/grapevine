import db from './../models';

const userController = {};

userController.post = (req, res) => {
    const { username, password } = req.body;

    const user = new db.User({
        username,
        password
    });

    user.save()
        .then ((newUser) => {
            res.status(200).json({
                success: true,
                data: newUser,
            })
        })
        .catch((err) => next({
            log: `Error in userController.userSave: ${err}`, // , <- this is what logs in our console on the backend
            message: 'Error in userSave controller' // <- this is what gets sent back to the client
            })
          )
};

export default userController;

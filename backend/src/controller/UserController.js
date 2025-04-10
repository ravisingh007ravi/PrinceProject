const userModel = require('../model/userModel')
const { nameRegex, emailRegex, passwordRegex } = require('../validation/AllValidation')
exports.CreateUser = async (req, res) => {
    try {
        const data = req.body;

        const { name, email, password } = data;

        if (!name) return res.status(400).send({ status: false, msg: 'name is required' });
        if (!nameRegex(name)) return res.status(400).send({ status: false, msg: 'name is not valid' });

        if (!email) return res.status(400).send({ status: false, msg: 'email is required' });
        if (!emailRegex(email)) return res.status(400).send({ status: false, msg: 'email is not valid' });

        if (!password) return res.status(400).send({ status: false, msg: 'password is required' });
        if (!passwordRegex(password)) return res.status(400).send({ status: false, msg: 'password is not valid' });

        const checkUser = await userModel.findOne({ email: email });
        if (checkUser) return res.status(400).send({ status: false, msg: 'email already exist' });

        const CreateDB = await userModel.create(data);

        res.status(201).send({ status: true, msg: 'User Created', data: CreateDB });
    }
    catch (e) {
        res.status(500).send({ status: false, msg: e.message });
    }
}
exports.b = (req, res) => {
    res.send({ status: true, msg: "hello backends b api" });
}
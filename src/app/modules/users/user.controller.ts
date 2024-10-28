import usersServices from './user.services';
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await usersServices.createUser(req.body);
        res.status(200).json({
            success: true,
            message: 'User created successfully...',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to create user...',
        });
        console.log(error);
    }
};

export default {
    createUser,
};

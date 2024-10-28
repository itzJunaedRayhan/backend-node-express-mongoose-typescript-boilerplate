import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
    //  AUTO GENARETED INCREMENTAL ID:
    const id = await generateUserId();
    user.id = id;

    //  DEFAULT PASSWORD
    if (!user.password) {
        user.password = 'defaultPassword';
    }

    const createdUser = await User.create(user);
    if (!createdUser) {
        throw new Error(`Failed to create User!`);
    }
    return createdUser;
};

export default {
    createUser,
};

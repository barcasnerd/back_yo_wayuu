import { Like, getRepository } from "typeorm";
import { User } from "../models/user.model"
import { hashPassword } from "../utils/global.util";
import { generateAvatarLink } from "../utils/user.utils";

export async function getAllUsers(where?: { username: string; }): Promise<User[]> {
    const userRepository = getRepository(User);
    const users = await userRepository.find({ where });
    return users;
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
        where: {
            email: email.toLowerCase()
        },
    });
    return user;
}

export async function getUserByUsername(username: string): Promise<User | undefined> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
        where: {
            username
        },
    });
    return user;
}

export async function getUserById(id: number): Promise<User | undefined> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    return user;
}

export async function getUserByEmailOrUsername(email: string, username: string): Promise<User | undefined> {
    const userRepository = getRepository(User);
    const user = await userRepository
        .createQueryBuilder('user')
        .where('user.email = :email OR user.name = :username', { email, username })
        .getOne();
    return user;
}



export async function createUser(data: { email: string, password: string, name: string, lastName: string }): Promise<User> {

    let avatar = "https://cdn-icons-png.flaticon.com/512/1/1247.png";

    data.password = await hashPassword(data.password);
    data.email = data.email.toLowerCase();
    data.name = data.name.toLowerCase();
    data.lastName = data.lastName.toLowerCase();

    const userRepository = getRepository(User);


    let userEntity = <User>data;
    let user = await userRepository.save(userEntity);

    let saved = await userRepository.findOne(user.id);
    return saved!;
}



export async function getUserByUsernameLike(username: string): Promise<User[]> {
    const userRepository = getRepository(User);
    const user = await userRepository.find({
        where: {
            username: Like(`%${username}%`)
        },

    });
    return user;
}

export async function editUser(emailOrId: number | string, data: { email?: string, password?: string, name?: string, lastName?: string, progresoCurso1?: number, notaCurso1?: number, notaCurso2?: number, notaCurso3?: number, progresoCurso2?: number, progresoCurso3?: number }): Promise<User | undefined> {
    const userRepository = getRepository(User);
    let user: User | undefined;
    if (typeof emailOrId == "string") {
        user = await userRepository.findOne({ where: { email: emailOrId } });
    } else {
        user = await userRepository.findOne(emailOrId);
    }
    if (user !== undefined) {
        if (data.password !== undefined) {
            user.password = data.password;
        }
        if (data.name !== undefined) {
            user.name = data.name;
        }
        if (data.lastName !== undefined) {
            user.lastName = data.lastName;
        }
        if (data.progresoCurso1 !== undefined) {
            user.progresoCurso1 = data.progresoCurso1;
        }
        if (data.progresoCurso2 !== undefined) {
            user.progresoCurso2 = data.progresoCurso2;
        }
        if (data.progresoCurso2 !== undefined) {
            user.progresoCurso2 = data.progresoCurso2;
        }
        if (data.notaCurso1 !== undefined) {
            user.notaCurso1 = data.notaCurso1;
        }
        if (data.notaCurso2 !== undefined) {
            user.notaCurso2 = data.notaCurso2;
        }
        if (data.notaCurso3 !== undefined) {
            user.notaCurso3 = data.notaCurso3;
        }
        await userRepository.save(user);
        user = await userRepository.findOne(user?.id);
    }
    return user;
}

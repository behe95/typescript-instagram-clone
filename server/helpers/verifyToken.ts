import jwt from 'jsonwebtoken';

export const verifyAccessToken = async (token: string) => {
    const decoded = jwt.verify(token, process.env.JWT__AUTH__TOKEN__SECRET!);

    return decoded;
}

export const verifyRefreshToken = async (token: string) => {
    const decoded = jwt.verify(token, process.env.JWT__REFRESH__TOKEN__SECRET!);

    return decoded;
}
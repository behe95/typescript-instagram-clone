import jwt from 'jsonwebtoken';

interface _IPayload {
    _id: string;
    username: string;
}

export function createAccessToken(payload:_IPayload) {
    return jwt.sign(payload, process.env.JWT__AUTH__TOKEN__SECRET!, {
        algorithm: 'HS256',
        expiresIn: '3600s'
    });
}

export function createRefreshToken(payload:_IPayload) {
    return jwt.sign(payload, process.env.JWT__REFRESH__TOKEN__SECRET!, {
        algorithm: 'HS256',
    });
}
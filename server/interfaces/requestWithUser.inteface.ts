import { Request } from "express";

export default interface requestWithUser{
    _id: string;
    user: string;
}
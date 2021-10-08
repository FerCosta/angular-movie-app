import { Language2 } from './language2.model';
import { Language } from "./language.model";

export interface User extends Language {
    userId?: number;
    cpf: string;
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    profile: string;
    language: Language;
    active: boolean;
    roles: string;
    userName: string;
}
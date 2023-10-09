import { InputHTMLAttributes } from 'react';
export interface IBox extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    value?: string;
    label?: string;
    onChange?: (e: any) => void;
    register?: any;
};

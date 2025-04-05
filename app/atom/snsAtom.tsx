import { atom } from 'jotai';

interface SnsState {
    location: string;
    date: string;
    content: string;
    imageName: string;
    imageDescription: string;
}

export const snsState = atom<SnsState>({
    location: '',
    date: '',
    content: '',
    imageName: '',
    imageDescription: '',
});

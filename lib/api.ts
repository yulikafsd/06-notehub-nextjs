import axios from 'axios';
import type { NoteTag, Note, NewNote } from '../types/note';

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

interface ApiErrorResponse {
    status_code?: number;
    status_message?: string;
    message?: string;
    success?: boolean;
}

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const notesClient = axios.create({
    baseURL: 'https://notehub-public.goit.study/api',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`,
    },
});

notesClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (axios.isAxiosError<ApiErrorResponse>(error)) {
            console.error(
                'Axios error:',
                error.response?.data?.message ||
                    error.response?.data?.status_message ||
                    error.message,
            );
        } else {
            console.error('Unexpected error:', error);
        }
        return Promise.reject(error);
    },
);

export async function fetchNotes(
    search: string = '',
    page: number = 1,
    tag?: NoteTag,
): Promise<FetchNotesResponse> {
    const { data } = await notesClient.get<FetchNotesResponse>('/notes', {
        params: {
            search: search.trim() || undefined,
            page,
            tag: tag || undefined,
            perPage: 12,
            sortBy: 'created',
        },
    });
    return data;
}

export async function createNote(noteData: NewNote): Promise<Note> {
    const { data } = await notesClient.post<Note>('/notes', noteData);
    return data;
}

export async function deleteNote(noteId: string): Promise<Note> {
    const { data } = await notesClient.delete<Note>(`/notes/${noteId}`);
    return data;
}

export async function fetchNoteById(noteId: string): Promise<Note> {
    const { data } = await notesClient.get<Note>(`/notes/${noteId}`);
    return data;
}

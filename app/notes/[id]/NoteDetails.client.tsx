'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchNoteById } from '@/lib/api';

import Loading from '@/app/loading';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

import css from './NoteDetails.module.css';

export default function NoteDetailsClient() {
    const { id } = useParams<{ id: string }>();

    const {
        data: note,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
        refetchOnMount: false,
    });

    if (isLoading) {
        return (
            <div className={css.loaderWrapper}>
                <Loading />
            </div>
        );
    }

    if (error || !note) {
        return (
            <ErrorMessage
                message={
                    error instanceof Error
                        ? error.message
                        : 'Something went wrong.'
                }
            />
        );
    }

    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.header}>
                    <h2>{note.title}</h2>
                </div>
                <p className={css.tag}>{note.tag}</p>
                <p className={css.content}>{note.content}</p>
                <p className={css.date}>{note.createdAt}</p>
            </div>
        </div>
    );
}

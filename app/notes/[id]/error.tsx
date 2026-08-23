'use client';

import css from './NoteDetails.module.css';

type Props = {
    error: Error;
    reset: () => void;
};

export default function Error({ error }: Props) {
    return (
        <p className={css.error}>
            Could not fetch note details. {error.message}
        </p>
    );
}

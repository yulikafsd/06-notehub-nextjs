'use client';

type Props = {
    error: Error;
    reset: () => void;
};

export default function Error({ error }: Props) {
    return (
        <p className={css.text}>
            Could not fetch the list of notes. {error.message}
        </p>
    );
}

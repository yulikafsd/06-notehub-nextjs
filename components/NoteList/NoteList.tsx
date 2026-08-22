import Link from 'next/link';

/* Types & Services */
import { useDeleteNote } from '../../hooks/useNotes';
import type { Note } from '../../types/note';

/* Styles */
import css from './NoteList.module.css';

interface NoteListProps {
    notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
    const { mutate: deleteNoteMutation } = useDeleteNote();

    if (notes.length === 0) {
        return null;
    }

    return (
        <ul className={css.list}>
            {notes.map((note) => (
                <li key={note.id} className={css.listItem}>
                    <h2 className={css.title}>{note.title}</h2>
                    <p className={css.content}>{note.content}</p>
                    <div className={css.footer}>
                        <span className={css.tag}>{note.tag}</span>
                        <Link href={`/notes/${note.id}`} className={css.link}>
                            View details
                        </Link>
                        <button
                            type="button"
                            className={css.button}
                            onClick={() => deleteNoteMutation(note.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

import { useId } from 'react';
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateNote } from '../../hooks/useNotes';
import type { NoteTag } from '../../types/note';
import css from './NoteForm.module.css';

interface NoteFormProps {
    onClose: () => void;
}

interface NoteFormValues {
    title: string;
    content: string;
    tag: NoteTag | '';
}

const initialValues: NoteFormValues = {
    title: '',
    content: '',
    tag: '',
};

const NoteFormSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Title must be at least 3 characters')
        .max(50, 'Title is too long, maximum 50 characters')
        .required('Title is required'),
    content: Yup.string().max(
        500,
        'Content is too long, maximum 500 characters',
    ),
    tag: Yup.string()
        .oneOf(
            ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'],
            'Tag must be chosen',
        )
        .required('Tag is required'),
});

export default function NoteForm({ onClose }: NoteFormProps) {
    const fieldId = useId();
    const { mutate: createNoteMutation, isPending } = useCreateNote();

    const handleSubmit = (
        values: NoteFormValues,
        actions: FormikHelpers<NoteFormValues>,
    ) => {
        createNoteMutation(
            {
                title: values.title,
                content: values.content,
                tag: values.tag as NoteTag,
            },
            {
                onSuccess: () => {
                    actions.resetForm();
                    onClose();
                },
            },
        );
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={NoteFormSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor={`${fieldId}-title`}>Title</label>
                    <Field
                        id={`${fieldId}-title`}
                        type="text"
                        name="title"
                        className={css.input}
                    />
                    <ErrorMessage
                        name="title"
                        component="span"
                        className={css.error}
                    />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor={`${fieldId}-content`}>Content</label>
                    <Field
                        as="textarea"
                        id={`${fieldId}-content`}
                        name="content"
                        rows={8}
                        className={css.textarea}
                    />
                    <ErrorMessage
                        name="content"
                        component="span"
                        className={css.error}
                    />
                </div>

                <div className={css.formGroup}>
                    <label htmlFor={`${fieldId}-tag`}>Tag</label>
                    <Field
                        as="select"
                        id={`${fieldId}-tag`}
                        name="tag"
                        className={css.select}
                    >
                        <option value="">-- Choose tag --</option>
                        <option value="Todo">Todo</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Shopping">Shopping</option>
                    </Field>
                    <ErrorMessage
                        name="tag"
                        component="span"
                        className={css.error}
                    />
                </div>

                <div className={css.actions}>
                    <button
                        type="button"
                        onClick={onClose}
                        className={css.cancelButton}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={css.submitButton}
                        disabled={isPending}
                    >
                        {isPending ? 'Creating...' : 'Create note'}
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

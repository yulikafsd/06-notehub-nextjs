import css from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.content}>
                <p>
                    © {new Date().getFullYear()} NoteHub. All rights reserved.
                </p>
                <div className={css.wrap}>
                    <p>Developer: Yuliia Zahorovska</p>
                    <p>
                        Contact us:&nbsp;
                        <a href="mailto:ju.zagorovsky@gmail.com">
                            ju.zagorovsky@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

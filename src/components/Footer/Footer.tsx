import type { FC, ReactNode } from 'react'

import styles from './Footer.module.css'

export interface FooterProps {
    appVersion: string;
    children?: ReactNode;
}

export const Footer: FC<FooterProps> = (props) => {
    return (
        <footer className={styles.Footer}>
            <span className={styles.Version}>{props.appVersion}</span>
            {props.children}
        </footer>
    )
}

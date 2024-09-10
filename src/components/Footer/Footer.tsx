import { FC } from 'react'

import styles from './Footer.module.css'

export interface FooterProps {
    appVersion: string;
}

export const Footer: FC<FooterProps> = (props) => {
    return (
        <footer className={styles.Footer}>
            <span className={styles.Version}>{props.appVersion}</span>
            &#xa9;Copyright Optimacros 2018 - {new Date().getFullYear()}
        </footer>
    )
}

import { FC } from 'react'

import styles from './Footer.module.css'

interface Props {
    appVersion: string;
}

export const Footer: FC<Props> = (props: Props) => {
    return (
        <footer className={styles.Footer}>
            <span className={styles.Version}>{props.appVersion}</span>
            &#xa9;Copyright Optimacros 2018 - {new Date().getFullYear()}
        </footer>
    )
}

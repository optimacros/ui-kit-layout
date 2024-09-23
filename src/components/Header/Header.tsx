import type { FC, ReactNode } from 'react'

import styles from './Header.module.css'

export interface HeaderProps {
    children: ReactNode;
}

export const Header: FC<HeaderProps> = (props) => {
    const { children } = props

    return (
        <header className={styles.Header}>
            {children}
        </header>
    )
}

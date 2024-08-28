import { Component, JSX } from 'react'

import styles from './Footer.module.css'

interface Props {
    appVersion: string;
}

export class Footer extends Component<Props> {
    render(): JSX.Element {
        return (
            <footer className={styles.Footer}>
                <span className={styles.Version}>{this.props.appVersion}</span>
                &#xa9;Copyright Optimacros 2018 - {new Date().getFullYear()}
            </footer>
        )
    }
}

import classNames from 'classnames'

import styles from './HeaderContainer.module.css'

interface Props {
    className?: string;
    children?: JSX.Element | JSX.Element[];
}

export const HeaderContainer = (props: Props) => {
    const className = classNames(styles.Container, props.className)

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

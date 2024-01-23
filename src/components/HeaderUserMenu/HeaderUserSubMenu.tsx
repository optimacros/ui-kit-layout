import classNames from 'classnames'

import styles from './HeaderUserMenu.module.css'

interface Props {
    label: string;
    onClick: () => void;
    className?: string;
    children?: JSX.Element | JSX.Element[];
}

const HeaderUserSubMenu = (props: Props) => {
    const className = classNames(styles.userMenu_List, styles.userMenu_List_SubMenu, props.className)

    return (
        <li>
            <span
                title={props.label}
                onClick={props.onClick}
            >
                {props.label}
            </span>

            <ul className={className}>
                {props.children}
            </ul>
        </li>
    )
}

export { HeaderUserSubMenu }

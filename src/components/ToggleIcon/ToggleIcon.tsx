import classNames from 'classnames'
import { Component, JSX } from 'react'
import { Icon } from 'ui-kit-core'

import styles from './ToggleIcon.module.css'

type Props = {
    isOpen?: boolean;
    handleClick?: (() => void) | undefined;
    wrapperClassName?: string;
    iconClassName?: string;
}

export class ToggleIcon extends Component<Props> {
    render(): JSX.Element {
        const { isOpen, handleClick, wrapperClassName, iconClassName } = this.props
        const iconValue = isOpen
            ? 'keyboard_arrow_right'
            : 'keyboard_arrow_left'

        const title = isOpen
            ? 'Hide panel'
            : 'Show panel'

        const className = classNames(
            wrapperClassName,
            styles.ToggleButtonWrapper,
            {
                [styles.ToggleButtonWrapper__Close]: isOpen,
                [styles.ToggleButtonWrapper__Open]: !isOpen,
            },
        )

        const iconClassNameFinal = classNames(styles.ToggleButtonIcon, iconClassName)

        return (
            <div
                role="none"
                className={className}
                onClick={handleClick}
                title={title}
            >
                <Icon
                    className={iconClassNameFinal}
                    value={iconValue}
                />
                <Icon
                    className={iconClassNameFinal}
                    value={iconValue}
                />
            </div>
        )
    }
}

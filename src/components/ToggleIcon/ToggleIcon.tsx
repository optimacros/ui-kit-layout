import classNames from 'classnames'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

import iconDoubleArrowLeft from 'icons/icon-double-arrow-left.svg'
import iconDoubleArrowRight from 'icons/icon-double-arrow-right.svg'

import styles from './ToggleIcon.module.css'

type Props = {
    isOpen?: boolean;
    handleClick?: (() => void) | undefined;
    wrapperClassName?: string;
    iconClassName?: string;
}

export const ToggleIcon: FC<Props> = (props) => {
    const { isOpen, handleClick, wrapperClassName, iconClassName } = props
    const iconValue = isOpen
        ? iconDoubleArrowLeft
        : iconDoubleArrowRight

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
            <ReactSVG className={iconClassNameFinal}
                src={iconValue}
            />
        </div>
    )
}

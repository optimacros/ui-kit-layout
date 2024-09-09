import classNames from 'classnames'
import { FC } from 'react'
import { ReactSVG } from 'react-svg'

import { HeaderNotificationBadge } from './HeaderNotificationBadge'
import iconBell from 'icons/icon-bell.svg'
import { Notification } from 'types/Notification'

import styles from './HeaderNotification.module.css'

interface Props {
    notification: Notification;
}

export const HeaderNotification: FC<Props> = (props) => {
    const { notification } = props

    if (!notification.visible) {
        return null
    }

    const className = classNames({
        [styles.Notification]: true,
        [styles.Active]: notification.active,
    })

    return (
        <div
            className={className}
            onClick={notification.toggle}
        >
            <HeaderNotificationBadge notificationUnreadCount={notification.unreadCount} />
            <div className={styles.NotificationIcon}>
                <ReactSVG src={iconBell}/>
            </div>
        </div>
    )
}

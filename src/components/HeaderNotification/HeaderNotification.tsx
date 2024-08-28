import classNames from 'classnames'
import { JSX } from 'react'
import { Icon } from 'ui-kit-core'

import { HeaderNotificationBadge } from './HeaderNotificationBadge'
import { Notification } from 'types/Notification'

import styles from './HeaderNotification.module.css'

interface Props {
    notification: Notification;
}

export function HeaderNotification({ notification }: Props): JSX.Element | null {
    if (!notification.visible) {
        return null
    }

    const className = classNames({
        [styles.Notification]: true,
        [styles.Active]: notification.active,
    })

    const icon = 'notifications' + (notification.active
        ? ''
        : '_none'
    )

    return (
        <div
            className={className}
            onClick={notification.toggle}
        >
            <HeaderNotificationBadge notificationUnreadCount={notification.unreadCount} />
            <Icon
                value={icon}
                className={styles.NotificationIcon}
            />
        </div>
    )
}

import classNames from 'classnames'

import { HeaderNotificationBadge } from './HeaderNotificationBadge'

import styles from './HeaderNotification.module.css'
import { Icon } from 'ui-kit-core'

export function HeaderNotification(): JSX.Element | null {
    const notification = {
        unreadCount: 0,
        visible: false,
        showBell: true,
        toggle: () => {
            console.log('toggle')
        },
    }

    const className = classNames({
        [styles.Notification]: true,
        [styles.Active]: notification.visible,
    })

    if (!notification.showBell) {
        return null
    }

    return (
        <div
            className={className}
            onClick={notification.toggle}
        >
            <HeaderNotificationBadge notificationUnreadCount={notification.unreadCount} />
            <Icon
                value="notifications"
                className={styles.NotificationIcon}
            />
        </div>
    )
}

import styles from './HeaderNotificationBadge.module.css'

interface HeaderNotificationBadgeProps {
    notificationUnreadCount: number;
}

export function HeaderNotificationBadge({ notificationUnreadCount }: HeaderNotificationBadgeProps): JSX.Element | null {
    const isEmptyUnreadNotification = notificationUnreadCount <= 0

    if (isEmptyUnreadNotification) {
        return null
    }

    const visibleCount = notificationUnreadCount > 9
        ? '9+'
        : notificationUnreadCount

    return (
        <div className={styles.NotificationBadge}>
            {visibleCount}
        </div>
    )
}

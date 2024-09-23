export interface SidebarListItem {
    folderId: number | null;
    type: string;
    name: string;
    id: number;
    href?: string;
    active?: boolean;
    expand?: SidebarListItem[];
    icon?: string;
    adminUrl?: string;
}

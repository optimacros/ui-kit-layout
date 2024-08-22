export interface SidebarItem {
    folderId: number | null;
    type: string;
    name: string;
    id: number;
    href?: string;
    expand?: SidebarItem[];
}

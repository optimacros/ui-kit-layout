export interface ListItem {
    folderId: number | null;
    type: string;
    name: string;
    id: number;
    href?: string;
    active?: boolean;
    expand?: ListItem[];
    icon?: string;
}
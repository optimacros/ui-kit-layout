import type React from 'react'

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

export enum ResourceListType {
    AM = 'AM',
    OpenId = 'OpenId',
    Workspace = 'Workspace',
    Model = 'Model',
    Folder = 'Folder',
}

export interface ResourceListElement {
    id: number;
    type: ResourceListType | string;
    label: string;
    opened?: boolean;
    selected?: boolean;
    icon?: ResourceListType | string; // if not ResourceListTypeIcon use getIcon
    href?: string;
    onClick?: (element: ResourceListElement) => void;
    settingHref?: string;
    settingOnClick?: (element: ResourceListElement) => void;
    children?: ResourceListElement[];
}

export interface ResourceListProps {
    elements: ResourceListElement[];
    getIcon?: (icon: string) => React.ReactNode;
}

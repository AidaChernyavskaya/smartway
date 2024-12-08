export type Repository = {
    id: number;
    full_name: string;
    owner: Owner;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    archived: boolean;
    language: string;
    created_at: string;
    updated_at: string;
    html_url: string;
};

export type Owner = {
    login: string;
    avatar_url: string;
}

export enum sortFields {
    stars = 'stars',
    forks = 'forks',
    updated = 'updated'
}

export enum sortOrder {
    desc = 'desc',
    asc = 'asc',
}

export type SortingVariable = {
    sortField: sortFields;
    sortOrder: sortOrder;
    text: string;
}

export type MiniTag = {
    src: string;
    alt: string;
    info: number | string;
}

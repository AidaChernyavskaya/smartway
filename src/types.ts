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

export enum SortFields {
    stars = 'stars',
    forks = 'forks',
    updated = 'updated'
}

export enum SortOrder {
    desc = 'desc',
    asc = 'asc',
}

export type SortingVariable = {
    sortField: SortFields;
    sortOrder: SortOrder;
    text: string;
}

export type MiniTag = {
    src: string;
    alt: string;
    info: number | string;
}

export type ProfileTagProperty = {
    icon: string;
    info: string;
    about: string;
}

export enum ButtonSize {
    small = 'small',
    big = 'big'
}

export type Params = {
    q?: string;
    sort?: SortFields;
    order?: SortOrder;
    per_page?: number;
    page?: number;
}

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
};

export type Owner = {
    login: string;
    avatar_url: string;
}

export type Sort = 'stars' | 'forks' | 'updated';
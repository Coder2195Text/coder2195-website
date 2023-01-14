export interface IAsset {
    id: string;
    url: string;
    width: number;
    height: number;
}

export interface IRichText {
    markdown: string;
}

export interface IBlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string | null;
    coverImage: IAsset | null;
    content: IRichText
    slug: string;
    previous: IBlogPost | null;
    next: IBlogPost | null
}

export interface IChangeLogEntry {
    version: string;
    project: IProject;
    description: IRichText;
}

export interface IProject {
    changeLogEntries: IChangeLogEntry[];
    slug: string;
    title: string;
    embed: string;
    description: IRichText;
    excerpt: string | null;
}

export interface ISocial {
    icon: IAsset;
    url: string;
    target: string;
}
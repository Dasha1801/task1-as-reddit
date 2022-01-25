export interface ArticleInfo {
    author?: string;
    title: string;
    id: string;
    selftext: string;
    url: string;
    score: number;
    num_comments: number;
}

export interface InfoItem {
    item: ArticleInfo
}

export interface ArticleProps {
    kind: string,
    data: ArticleInfo
}

export interface InfoComment {
    num_comments: number;
}

export interface InfoScore {
    score: number;
}

export interface CommentInfo {
    author: string;
    body_html: string;
    id: string;
    score: number;
}

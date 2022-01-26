export interface ArticleInfo {
    author?: string
    title: string
    id: string
    selftext: string
    url: string
    score: number
    num_comments: number
}

export interface InfoItem {
    item: ArticleInfo
    className?: string
}

export interface ArticleProps {
    kind: string,
    data: ArticleInfo
}

export interface InfoComment {
    num_comments: number
}

export interface ILikes {
    score: number
    className?: string
}

export interface ICommentInfo {
    author: string
    body_html: string
    id: string
    score: number
}

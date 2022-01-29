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
    data: ArticleInfo
}

// export interface InfoComment {
//     num_comments: number
// }

export interface ILikes {
    score: number
    className?: string
}

export interface IReplies {
    data: {
        children: ICommentProps[]
    }
}

export interface IRepliesChildren {
    data: IReplies[]
}

export interface ICommentInfo {
    author: string
    body: string
    id: string
    score: number
    created_utc: number
    replies: IReplies | undefined
}

export interface IAuthorDateComment {
    author: string
    created_utc: number
}

export interface ITextComment {
    body: string
}

export interface ILikesComment {
    score: number
}

export interface ICommentProps {
    data: ICommentInfo
}

export interface IComment {
    item: ICommentInfo
}
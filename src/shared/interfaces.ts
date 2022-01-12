export interface ArticleInfo {
    title: string
    id: string
    selftext: string
    url: string
    score: number
}

export interface InfoItem{
    item: ArticleInfo
}

export interface ArticleProps {
    kind: string,
    data: ArticleInfo
}

import {
    ICommentInfo,
    ICommentProps,
    IResComment,
    ArticleProps,
    IResArticles,
    ArticleInfo
} from "shared/interfaces";

export const getTime = (created_utc: number): string => {
    const nowTimeInSec = new Date().getTime() / 1000;
    const agoTimeInMin = Math.ceil((nowTimeInSec - created_utc) / 60);
    const agoTimeInHr = Math.floor(agoTimeInMin / 60);
    const agoTimeInDay = Math.floor(agoTimeInHr / 24);

    if (agoTimeInDay && agoTimeInDay < 30) {
        return `${agoTimeInDay} day ago`
    }

    if (agoTimeInHr && agoTimeInHr < 24) {
        return `${agoTimeInHr} hr. ago`
    }

    if (agoTimeInMin && agoTimeInMin < 60) {
        return `${agoTimeInMin} min. ago`
    }

    return 'over a month ago';
}


export const mapResponseToComments = (response: IResComment): ICommentInfo[] => (
    response.data[1].data.children.map((el: ICommentProps) => el.data));

export const mapResponseToArticles = (response: IResArticles): ArticleInfo[] => (
    response.data.data.children.map((el: ArticleProps) => el.data));


export const sortComments = (sortParams: string, items: ICommentInfo[]): ICommentInfo[] => {

    if (sortParams === 'new') {
        return items.sort((x, y) => y.created_utc - x.created_utc);
    }

    if (sortParams === 'old') {
        return items.sort((x, y) => x.created_utc - y.created_utc);
    }

    if (sortParams === 'top') {
        return items.sort((x, y) => y.score - x.score);
    }

    return items;

};
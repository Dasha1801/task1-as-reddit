import { cities } from '../data/cities';
import { ICommentInfo } from '../shared/interfaces';

export const getTime = (created_utc: number): string => {
  const nowTimeInSec = new Date().getTime() / 1000;
  const agoTimeInMin = Math.ceil((nowTimeInSec - created_utc) / 60);
  const agoTimeInHr = Math.floor(agoTimeInMin / 60);
  const agoTimeInDay = Math.floor(agoTimeInHr / 24);

  if (agoTimeInDay && agoTimeInDay < 30) {
    return `${agoTimeInDay} day ago`;
  }

  if (agoTimeInHr && agoTimeInHr < 24) {
    return `${agoTimeInHr} hr. ago`;
  }

  if (agoTimeInMin && agoTimeInMin < 60) {
    return `${agoTimeInMin} min. ago`;
  }

  return 'over a month ago';
};

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

export const findCity = (city: string): number =>
  cities.findIndex((el) => el.name.toLowerCase() === city.trim().toLowerCase());

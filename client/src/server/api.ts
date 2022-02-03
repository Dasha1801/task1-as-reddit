import axios from 'axios';
import { ArticleInfo, IRulesSubreddit, ILimitArticles } from '../shared/interfaces';
import { baseUrl } from '../constants/index';

export const fetchRules = (): Promise<IRulesSubreddit[]> =>
  axios.get(`${baseUrl}rules`).then((res) => res.data);

export const fetchArticles = (limit: ILimitArticles): Promise<ArticleInfo[]> =>
  axios.post(`${baseUrl}posts`, limit).then((res) => res.data);

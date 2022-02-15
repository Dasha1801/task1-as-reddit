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
  item: ArticleInfo;
  className?: string;
}

export interface ArticleProps {
  data: ArticleInfo;
}

export interface ILikes {
  score: number;
  className?: string;
}

export interface IReplies {
  data: {
    children: ICommentProps[];
  };
}

export interface IRepliesChildren {
  data: IReplies[];
}

export interface ICommentInfo {
  author: string;
  body: string;
  id: string;
  score: number;
  created_utc: number;
  replies: IReplies | undefined;
}

export interface IAuthorDateComment {
  author: string;
  created_utc: number;
}

export interface ITextComment {
  body: string;
}

export interface ILikesComment {
  score: number;
}

export interface ICommentProps {
  data: ICommentInfo;
}

export interface IComment {
  item: ICommentInfo;
}

export interface IRulesSubreddit {
  short_name: string;
  description: string;
  created_utc: number;
}

export interface ILimitArticles {
  limit: number;
}

export interface IArticleId {
  id: string;
}

export interface ICity {
  city: string | undefined;
}

export interface IPropsModal {
  show: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAlert {
  variant: string;
  text: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopover {
  variant: string;
  text: string;
  className?: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  address: string;
}

export interface ILogInUser {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  accessToken: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  address: string;
}

export interface IPropsSignUpGroup {
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalLogIn: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  showPopover: boolean;
}

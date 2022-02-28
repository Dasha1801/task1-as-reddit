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

export interface ILikes {
  score: number;
  className?: string;
}

export interface IReplies {
  data: {
    children: ICommentProps[];
  };
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
  title: string;
  description: string;
  id: string;
}

export interface ILimitArticles {
  limit: number;
}

export interface IArticleId {
  id: string;
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

export interface IRegisterSocialUser {
  name: string;
  email: string;
}

export interface ILogInUser {
  name: string;
  email: string;
  password: string;
}

export interface ILogInSocialUser {
  email: string;
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

export interface ICityProps {
  name: string;
}

export interface IFieldProps {
  setState: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
  city: string;
}

export interface IAction {
  action: string;
}

export interface IProfile {
  name: string;
  email: string;
}

export interface IPropsItemRule {
  item: IRulesSubreddit;
}

export interface IDataTable {
  date: string;
  organizers: string;
  network: string;
  id: string;
}

export interface IPropsTrTable {
  item: IDataTable;
}

export interface IFilters {
  name: string;
  id: string;
  order: number;
}

export interface IModerator {
  name: string;
  id: string;
  text?: string;
}

export interface ISideBar {
  el: JSX.Element;
  id: string;
}

export interface IItemBoard {
  task: string;
  description: string;
  id: string;
}

export interface IColumn {
  name: string;
  items: IItemBoard[];
}

export interface IColumns {
  [x: string]: {
    name: string;
    items: IItemBoard[] | [];
  };
}

export interface IBoard {
  board: IColumns;
}

export interface IPropsModalUpdate {
  show: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  item: IItemBoard;
  columnId: string;
  column: IColumn;
}

export interface IPropsUpdateTask {
  item: IItemBoard;
  columnId: string;
  column: IColumn;
  handleClose: () => void;
}

export interface IPropsCreateTask {
  handleClose: () => void;
}

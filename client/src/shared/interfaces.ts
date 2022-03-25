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

export interface ICategory {
  name: string;
  id: string;
  type: string;
}

export interface IItemServices {
  name: string;
  id: string;
  code: string;
  description: string;
  link: string;
  price: string;
  outsource: boolean;
  category: ICategory;
}

export interface IItemService {
  info: IItemServices;
}

export interface IItemServiceMenu {
  info: IItemServices;
  code: string;
  idService: string;
}

export interface IItemsServices {
  [x: string]: IItemServices[];
}

export interface IProduct {
  name: string;
  code: string;
  price: string;
  serviceId: string;
  photo: string;
}

export interface IItemProduct {
  product: IProduct;
}

export interface IService {
  id: string;
  code: string;
}

export interface IServicesMenu {
  changeShowMenu: () => void;
  itemsService: IItemServices[];
  showMenu: boolean;
  code: string;
  idService: string;
}

export interface ITabList {
  categories: string[];
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  currentCategory: string;
  code: string;
}

export interface IPopoverBasket {
  text: string;
}

export interface ISavedService {
  productId: string;
  servicesName: string;
  serviceId: string;
  category: string;
}

export interface IServiceId {
  serviceId: string;
}

export interface IPopoverService {
  text: string;
  isShow: boolean;
}

export interface IPropsDeleteServices {
  info: IItemServices;
  idService: string;
  servicesCode: string;
}

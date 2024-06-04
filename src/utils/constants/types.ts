export interface Route {
  id?: number;
  title: string;
  icon?: JSX.Element;
  controls?: string;
  route: string;
  children: {
    route: string;
    isHidden: boolean;
    title: string;
    translationKey: string;
  }[];
  expanded?: boolean;
  translationKey: string;
  isHidden: boolean;
}

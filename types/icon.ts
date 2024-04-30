type ThemeOptions = {
  light: string;
  dark: string;
};

export interface Icon {
  id: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  url: string;
}

import type { SnackbarProps } from 'notistack';

type Notifications = {
  options: SnackbarProps;
  maxSnack: number;
};

type Todo = {
  id: string;
  title: string;
  text: string;
};

export type { Notifications, Todo };

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  ClassScreen: { user: User };
  ScanScreen: undefined;
  ConfirmationScreen: undefined;
};

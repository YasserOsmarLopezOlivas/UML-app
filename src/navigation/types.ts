export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  HomeScreen: { user: User };
  ScanScreen: undefined;
  ConfirmationScreen: undefined;
  StudentScreen: undefined;
};

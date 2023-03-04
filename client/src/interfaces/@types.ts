export interface InputProps {
  queryFunction: queryFunction;
}

export type queryFunction = (email: string, password: string) => void;


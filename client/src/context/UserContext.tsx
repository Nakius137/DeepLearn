import React, { Dispatch, SetStateAction } from "react";

export interface ContextProperties {
  email: string;
  password: string;
  token: string;
  checked: boolean;
}

interface Context {
  contextValues: ContextProperties;
  setContextValue: Dispatch<SetStateAction<ContextProperties>>;
}

export const defaultContext: ContextProperties = {
  email: "",
  password: "",
  token: "",
  checked: false,
};

export default React.createContext<Context>({
  contextValues: defaultContext,
  setContextValue: () => {},
});

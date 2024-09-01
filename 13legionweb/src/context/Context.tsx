import { createContext, ReactNode, useState } from "react";

interface IAppContext {
  isMenuOpenState: boolean;
  changeMenuHandler: () => void;
}

const AppContext = createContext<IAppContext>({
  isMenuOpenState: false,
  changeMenuHandler: () => {},
});

const Context = ({ children }: { children: ReactNode }) => {
  const [isMenuOpenState, setMenuState] = useState<boolean>(false);

  const changeMenuHandler = () => {
    setMenuState((state) => !state);
  };

  const contextData: IAppContext = {
    isMenuOpenState,
    changeMenuHandler,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export default Context;
export { AppContext };

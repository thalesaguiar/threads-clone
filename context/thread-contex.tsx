import * as React from "react";
import { Thread } from "../.expo/types/threads";
import { generateRamdomThread } from "../utils/generate-dommy-data";

export const ThreadsContext = React.createContext<Thread[]>([]);

export const ThreadProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = React.useState<Thread[]>([]);
  React.useEffect(() => {
    setThreads(generateRamdomThread());
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};

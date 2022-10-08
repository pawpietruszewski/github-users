import { Dispatch, SetStateAction, createContext, ReactNode, useContext, useMemo, useState, useCallback } from 'react';

export interface SearchHistoryContextState {
  addNewHistoryElement: (element: string) => void;
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
}

export const SearchHistoryContext = createContext<SearchHistoryContextState | null>(null);

export const SearchHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<string[]>([]);
  const addNewHistoryElement = useCallback((element: string) => {
    setHistory([
      ...history,
      ...(history[history.length - 1] !== element ? [element] : []),
    ]);
  }, [history]);

  const value = useMemo(() => ({
    addNewHistoryElement,
    history,
    setHistory,
  }), [history, addNewHistoryElement]);

  return <SearchHistoryContext.Provider value={value}>{children}</SearchHistoryContext.Provider>;
};

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  if (!context) {
    throw new Error('useSearchHistory must be used with SearchHistoryProvider');
  }
  return context;
};

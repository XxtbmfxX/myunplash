import React from "react";

export type TodoContextType = {
  todos: ITodo[]; //array state
  saveTodo: (todo: ITodo) => void; //function
  updateTodo: (id: number) => void; //function
};

export type AppContextType = {
  overlay: boolean;
  setoverlay: React.SetStateAction<{}>;

  GlobalUser: null;
  setGlobalUser: React.SetStateAction<{}>;

  fileCard: boolean;
  setfileCard: (value: boolean) => void;
};

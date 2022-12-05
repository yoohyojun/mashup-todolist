import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./TodoContext";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
      <TodoProvider>
        <GlobalStyle />
          <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
          </TodoTemplate>
      </TodoProvider>
  );
}

export default App;

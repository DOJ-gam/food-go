import ThemeProvider from "./context/ThemeContext";
import AppNav from "./navigations/AppNav";

export default function App() {
  return (
    <ThemeProvider>
      <AppNav />
    </ThemeProvider>
  );
}

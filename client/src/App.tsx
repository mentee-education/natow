import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PasswordGate from "./components/PasswordGate";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tribes from "./pages/Tribes";
import Experiences from "./pages/Experiences";
import Events from "./pages/Events";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tribes" component={Tribes} />
      <Route path="/experiences" component={Experiences} />
      <Route path="/events" component={Events} />
      <Route path="/about" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <PasswordGate>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </PasswordGate>
    </ErrorBoundary>
  );
}

export default App;

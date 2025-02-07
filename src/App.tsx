import { Route, Switch } from 'wouter';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { ThemeProvider } from '@/components/theme-provider';

import Navbar from '@/components/ui/navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';

function fallbackRender({ error }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/flights" component={Flights} />
          <Route>404, Not Found!</Route>
        </Switch>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

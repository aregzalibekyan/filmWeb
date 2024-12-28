import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import React from 'react';
interface ErrorBoundaryProps {
  fallback:React.ReactNode,
  children:React.ReactNode
}
interface ErrorBoundaryStyle {
  hasError:boolean
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryStyle> {
  constructor(props: any) {
    super(props);
    this.state = {hasError:false};
  }
  static getDerivedStateFromError() {
    return {hasError:true};
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <ErrorBoundary fallback={<p>Something is not ok</p>}>
      <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
)


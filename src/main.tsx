import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Check the console for more information.</h1>
    }

    return this.props.children
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
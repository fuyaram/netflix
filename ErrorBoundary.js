import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToService(error, errorInfo);
    this.setState({ hasError: true });
  }

  logErrorToService(error, errorInfo) {
    // You can implement your own logging logic here, for example:
    // Send error and errorInfo to a logging server
    console.error('Error occurred:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
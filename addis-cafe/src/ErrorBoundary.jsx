import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }
  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }
  render() {
    if (this.state.error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Oops! 💥</h2>
            <p className="text-gray-500">Something went wrong.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

"use client";

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

          <h1 className="text-4xl font-bold text-red-600">
            Oops!
          </h1>

          <p className="mt-4 text-gray-600 text-center">
            Something went wrong while rendering this page.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg"
          >
            Reload Page
          </button>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
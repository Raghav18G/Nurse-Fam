import React from "react";

import PropTypes from "prop-types";

import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
              <h2>Something went wrong</h2>
            </div>
            <button onClick={this.props.handleTryAgain}>Try Again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  handleTryAgain: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  handleTryAgain: () => window.location.reload(),
};

export default ErrorBoundary;


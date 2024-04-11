import React, { Component } from 'react';

class SafeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to error monitoring service
        console.error('Error caught by SafeComponent:', error, errorInfo);
        // Perform additional error handling (e.g., notify user, recover gracefully)
        // Optionally, set state to trigger UI updates
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI
            return <div>Something went wrong. Please try again later.</div>;
        }

        // Render child components
        return this.props.children;
    }
}

export default SafeComponent;

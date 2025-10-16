import React from 'react';

// Functional component that receives props
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

// Example usage of the Welcome component with different names
function App() {
  return (
    <div>
      <Welcome name="Deepak" />
      <Welcome name="Sarah" />
      <Welcome name="John" />
    </div>
  );
}

export default App;

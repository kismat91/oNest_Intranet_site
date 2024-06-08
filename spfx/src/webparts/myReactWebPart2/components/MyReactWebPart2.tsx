import * as React from 'react';

export interface IMyReactAppProps {
  description: string;
}

const MyReactApp: React.FC<IMyReactAppProps> = (props) => {
  return (
    <div>
      <h1>Welcome to My SharePoint React App</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default MyReactApp;

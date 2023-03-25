import React from 'react';

export default function Demo(): JSX.Element {
  return <>{document.cookie || "There's nothing!"}</>;
}

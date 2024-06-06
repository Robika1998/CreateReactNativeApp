// import React from 'react';
// import { View, StatusBar } from 'react-native';
// import { Navigation } from './screens/Navigation';

// export default function App() {
//   return <Navigation />;
// }


import React from 'react';
import { Navigation } from './screens/Navigation';
import { SavedCountProvider } from './screens/SavedCountContext';

export default function App() {
  return (
    <SavedCountProvider>
      <Navigation />
    </SavedCountProvider>
  );
}

const prodConfig = {
  apiKey: 'AIzaSyB2ugBI085HO_LBkvrEoTJXSxjr-wxjmlM',
  authDomain: 'internship-app-86d36.firebaseapp.com',
  projectId: 'internship-app-86d36',
  databaseURL: 'https://internship-app-86d36-default-rtdb.firebaseio.com',
  storageBucket: 'internship-app-86d36.appspot.com',
  messagingSenderId: '875986893700',
  appId: '1:875986893700:web:4fb0d09eee28a0015dbbd1'
};
const devConfig = {
  apiKey: 'AIzaSyB2ugBI085HO_LBkvrEoTJXSxjr-wxjmlM',
  authDomain: 'internship-app-86d36.firebaseapp.com',
  projectId: 'internship-app-86d36',
  databaseURL: 'https://internship-app-86d36-default-rtdb.firebaseio.com',
  storageBucket: 'internship-app-86d36.appspot.com',
  messagingSenderId: '875986893700',
  appId: '1:875986893700:web:4fb0d09eee28a0015dbbd1'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;

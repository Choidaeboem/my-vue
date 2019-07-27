# my-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### firebase config file
** ./firebaseConfig.js **
```javascript
export default {
  apiKey: '...',
  authDomain: 'domain.firebaseapp.com',
  databaseURL: 'https://domain.firebaseio.com',
  projectId: 'domain',
  storageBucket: '',
  messagingSenderId: '111',
  appId: '222'
}
```
### firebase deploy
```bash
yarn firebase:deploy
```
# [react-scroll-store](https://github.com/madou/react-scroll-store)

[![NPM version](http://img.shields.io/npm/v/react-scroll-store.svg?style=flat-square)](https://www.npmjs.com/package/react-scroll-store)
[![NPM downloads](http://img.shields.io/npm/dm/react-scroll-store.svg?style=flat-square)](https://www.npmjs.com/package/react-scroll-store)
[![Build Status](http://img.shields.io/travis/madou/react-scroll-store/master.svg?style=flat-square)](https://travis-ci.org/madou/react-scroll-store)
[![codecov](https://codecov.io/gh/madou/react-scroll-store/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-scroll-store)
[![Dependency Status](http://img.shields.io/david/madou/react-scroll-store.svg?style=flat-square)](https://david-dm.org/madou/react-scroll-store)

Stores scroll position on unmount and sets it back when the component is re-mounted.

## Installation

```sh
npm install react-scroll-store
```

## Usage

Import the component factory, create the component, then use it.

```javascript
import createScrollStore from 'react-scroll-store';

const RestoreScrollOnMount = createScrollStore();

const App = () => (
  <div>
    <RestoreScrollOnMount />
  </div>
);
```

When compontent did mount it will set the scroll position.
When component will unmount it will store the scroll position.

### React Story Book

To run the component in various modes, run the following command then go to `http://localhost:6006/`.

```bash
npm start
```

### Testing

```bash
npm test
```

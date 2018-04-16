# OutPromise

Promise that resolves/rejects externally

## Install

`npm install out-promise`

## Simple usage

```
const OutPromise = require('out-promise')

let op = new OutPromise()

op.resolve('hi there')

op.then(resolved=>console.log(resolved)) // Will print 'hi there'

// You can also chain

new OutPromise().resolve('More greets').then(resolved=>console.log(resolved)) // Will print 'More greets'

```

## Constructor

### new OutPromise()

No parameters required. The function that resolves or rejects will be called externally

## Methods

### OutPromise.prototype.resolve(value)

Returns a Promise object that is resolved with the given value

### OutPromise.prototype.reject(reason)

Returns a Promise object that is rejected with the given reason.

### OutPromise.prototype.catch(onRejected)

Same behaviour as Promise.prototype.catch(onRejected)

### OutPromise.prototype.then(onFulfilled, onRejected)

Same behaviour as Promise.prototype.then(onFulfilled, onRejected)

### OutPromise.prototype.finally(onFinally)

Same behaviour as Promise.prototype.finally(onFinally)

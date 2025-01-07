# React 18+ Batching Issue: Unexpected State Updates

This repository demonstrates a potential issue with state updates in React 18 and later versions due to automatic batching.  In previous versions, multiple calls to `setState` within the same event handler would trigger separate renders. However, React 18 batches these updates by default, which can lead to unexpected behavior if not handled correctly.

The `bug.js` file contains a simple counter component that illustrates this issue. The solution is presented in `bugSolution.js`.

## How to reproduce:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Click the increment button. Observe that the counter only increments by 2 instead of incrementing twice separately.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle multiple state updates in React 18+ to avoid unexpected batching behavior.
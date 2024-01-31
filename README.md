<h1 align="center">
  Simple DOM event delegation
</h1>

<h6 align="center">
  <a href="https://github.com/tbleckert/delegate-event#install">Install</a>
  ·
  <a href="https://github.com/tbleckert/delegate-event#usage">Usage</a>
</h6>

<p align="center">
    <a href="https://www.npmjs.com/package/@bleckert/delegate-event">
        <img src="https://img.shields.io/npm/v/@bleckert/delegate-event?style=for-the-badge" alt="NPM" />
    </a>
    <a href="https://bundlephobia.com/result?p=@bleckert/delegate-event">
        <img src="https://img.shields.io/bundlephobia/minzip/@bleckert/events?style=for-the-badge" />
    </a>
    <a href="https://github.com/sponsors/tbleckert">
        <img src="https://img.shields.io/badge/GitHub-donate-yellow?style=for-the-badge" />
    </a>
</p>

## Install

`npm i @bleckert/delegate-event` or `yarn add @bleckert/delegate-event`

## Usage

```javascript
import delegateEvent from '@bleckert/delegate-event';

delegateEvent(document.body, 'click', 'button', (event, element) => {
  console.log(element);
});
```

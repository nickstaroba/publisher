# Eterna Style Utilities

## Installation

```shell
npm i --save-dev @eterna/style-utilities
```

## Usage

```scss
@use "~@eterna/style-utilities" as su;

.box {
  background: su.grayscale(50);

  @include su.mq($from: xs, $until: md) {
    padding: su.px(12);
  }

  @include su.mq($from: md, $until: lg) {
    padding: su.px(24);
  }
}
```

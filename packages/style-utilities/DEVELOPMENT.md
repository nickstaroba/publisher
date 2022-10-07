# Eterna Assets Development Guide

## Installation

```shell script
npm i
```

## Building

```shell script
npm run build
```

## Publishing

### Dry Run

Spin up a local registry:

```shell script
npm run registry
```

Publish packages locally:

```shell script
npm run draft
```

After rebuilding, delete the existing packages and republish:

```shell script
rm -rf ~/.config/verdaccio/storage/@eterna/
```

## License

[MIT]

[mit]: https://choosealicense.com/licenses/mit/

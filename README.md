## steps to reproduce

```bash
$ git clone https://github.com/eps1lon/next-webpack-alias.git
$ cd next-webpack-alias
$ yarn
$ yarn build
$ node out/server/main page1
# no crash, prints markup
```

## what did we do?

We aliased `classnames` to `clsx` with webpacks `config.resolve.alias`. To illustrate
that this alias isn't always used we removed `classnames` from our node_modules/
(via `.yarnclean`).

## Use cases

- alias node_modules to patched forks (this repository)
- alias node_modules in dependencies to packages published from a monorepo (mui-org/material-ui)

# vite-boilerplate

> A minimal project template for react. [Demo](https://vahidtvj.github.io/vite-boilerplate/)
## Features

- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/) for formatting and linting
- [TanStack Router](https://tanstack.com/router/latest) File based routing
- [Storybook](https://storybook.js.org/) component development
- [Lefthook](https://github.com/evilmartians/lefthook) managing commits
- PWA ready

## Setup

- clone the repo or use `Use this template`
- install NodeJS and [PNPM](https://pnpm.io/installation)
- run `pnpm i` to install necessary packages

## Development

- To run the app: `pnpm dev`
- To develop components separately: `pnpm storybook`

PWA only works in production environment. If you want test it out, **build** the app and then run **preview** command. You also need a self signed certificate which you can get from [mkcert](https://github.com/FiloSottile/mkcert). Make sure to edit [.env.production](.env.production) according to your certs

## License

This project is licensed under the [MIT License](LICENSE)

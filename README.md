# Shashank Adhikari — Portfolio

Personal portfolio site built with [Astro](https://astro.build).

## Getting started

Requires Node 22.23.4 or newer (`.nvmrc` pins Node 24, so `nvm use` picks it up).

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`  |
| `npm run preview` | Preview the production build locally    |

## Where things live

- `src/pages/index.astro`: the page, made up of one component per section
- `src/components/`: the sections (projects are listed at the top of `Work.astro`)
- `src/styles/global.css`: colours, type and all styling
- `src/images/`: portrait and project images, optimised at build time

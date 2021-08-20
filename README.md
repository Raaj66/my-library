# ICN -React Component Library POC



This POC project was created  get started with creating React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript]

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components


## Development

### Testing

```
yarn run test
```

### Building

```
yarn run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
yarn storybook
```

To export your Storybook as static files:

```
yarn run storybook:export
```
You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. 

To build and package :

```
yarn run build:lib
```

### Generating New Components

I've included a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../react-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

## Publishing

### Hosting via NPM

InProgress --Coming Soon

## Usage

Let's say we created a private NPM package called `react-component-library` with the `TestComponent` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { TestComponent } from "react-component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent theme="primary" />
  </div>
);

export default App;
```



### Using Component Library SASS Variables

I've found that it's helpful to export SASS variables to projects consuming the library. As such, I've added the `rollup-plugin-copy` NPM package and used it to copy the `typography.scss` and `variables.scss` into the `build` directory as part of the Rollup bundle process. This allows you to use these variables in your projects consuming the component library.

For example, let's say you installed `harvey-component-library` into your project. To use the exported variables/mixins, in a SASS file you would do the following:

```Sass
@import '~harvey-component-library/build/typography';

.example-container {
    @include heading;

    color: $harvey-white;
}
```

## Additional Help

### Using Alternatives to Sass

#### Less or Stylus

The Rollup plugin `rollup-plugin-postcss` supports Sass, Less and Stylus:

- For Stylus, install stylus: `yarn add stylus --dev`
- For Less, install less: `yarn add less --dev`

You can then remove `node-sass` from your dependencies.

#### CSS Modules

If you want to use CSS Modules, update `postcss` in `rollup-config.js` to:

```
postcss({
  modules: true
})
```

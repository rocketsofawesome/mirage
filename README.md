Mirage ![Branches](/coverage/badge-branches.svg)
---

# Rockets of Awesome Pattern Library V1

[Live Demo of the Pattern Library](https://rocketsofawesome.github.io/mirage/)

## Use the Pattern Library

First run the command:

`npm install @rocketsofawesome/mirage`

Then inside of your react project (preferably towards the top of the application) wrap the application in the `<ROATheme></ROATheme>` theme wrapper. This will set a bunch of props on children components such as colors, fonts, etc.

To import other components into your react app, simply do the following:

```
import { Logo } from '@rocketsofawesome/mirage'
```

You should then have access to the component and can use it like a normal react component:

```
<Logo />
```

It's that easy! Additional props are documented in

## Development

To run the pattern library locally, run the following:

```
npm start
```

This will start the styleguidist server which parses through the directories in the `src` directory, and output those components to the pattern library.

If you would like to publish your new component(s) to the styleguide demo, commit your changes like you would normally.

## Publish to npm

If you are happy with the changes that you have made to your component and you wish to publish your changes to npm, do the following.

First, be sure to add your component to the `src/index.js`

This is the file that gets parsed by rollup and distributed as commonJS in the `dist` directory.

Then run the following commands:
```
npm version patch
npm publish
```

The first command will bump the version of the pattern library by one patch number (Note: publishing to npm requires that a new version number be supplied).

The second command will push the new code up to npm so that when the command:

`npm install @rocketsofawesome/mirage`

is run, the latest changes will also be applied to the `npm module`!

There is a `prepublish` script that is run automatically that runs the webpack script which transpiles the ECMA Script 6 code into commonJS and bundles all the code up into a nice `build/index.js` file. There are also several other scripts that are run including the test suite and the building/publishing of the styleguide to the `gh-pages` branch.

The _Rockets of Awesome Pattern Library_ (RoA PL) is an organized set of interactive, reusable components that can be used to build out more complicated modules, pages, and templates. Pattern libraries often include example elements, sample code, variations, use cases, and considerations.
***
When building a pattern library, you should consider the following for each pattern you add:

Pattern name: Giving each pattern a name makes it easier to discuss and reference them. Meaningful names help people quickly grasp what the pattern may look like and how it may be used.

Visual representation: What does the pattern look like? An interactive visual representation of the pattern can show different states (like active, focus, hover) and include other variations.

Design elements: Add a downloadable design file that can be easily edited. Designers can then incorporate the pattern into their workflow more quickly. Code samples: Sample code includes the code that defines the semantic structure, visual style, and behavior for each pattern. For web-based libraries, this would be the HTML, CSS, and Javascript. In most cases, the CSS and Javascript should
already be defined in existing stylesheets and scripts. Sample code should document how to apply those styles and behaviors.

Variations: Some patterns have multiple variations. Show each of the visual variants, how to implement them, and what problems they are intended to solve. Use cases: Use cases define where and how to use patterns most effectively. They may even suggest alternative patterns for specific circumstances, good pattern combinations, and examples of when NOT to use the pattern.

Considerations: Even the best patterns have tradeoffs or potential pitfalls. Including considerations can help tell your team why (or more importantly why NOT) to use a pattern in certain circumstances. Related elements: What patterns are similar to this pattern? What patterns commonly accompany this one? Is this pattern a part of a larger component?

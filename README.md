# Mirage ![Branches](/coverage/badge-branches.svg) ![Functions](/coverage/badge-functions.svg) ![Lines](/coverage/badge-lines.svg) ![Statements](/coverage/badge-statements.svg)

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

### Loading Components with Alternate Themes

`reactstyleguidist` does not provide support for switching between themes in the pattern library. If you want to see what certain components look like with Mini styles applied, change this line of `SRC/core/theme/index.js` from this:
```
<ThemeProvider theme={theme} {...this.props}>
```
to this:
```
<ThemeProvider theme={miniTheme} {...this.props}>
```

If you want to switch back to the default theme, just revert your changes.

## Development

To run the pattern library locally, run the following:

```
npm start
```

This will start the styleguidist server which parses through the directories in the `src` directory, and output those components to the pattern library.

If you would like to publish your new component(s) to the styleguide demo, commit your changes like you would normally.

## Publish to npm

First, be sure to do your work on a feature branch, we have scripts that are run specifically on the master branch.

If you are happy with the changes that you have made to your component and you wish to publish your changes to npm, do the following.

First, be sure to add your component to the `src/index.js`, if you test your components by pulling them in from the `SRC` directory, you should be able to tell if they are being exported properly for consumption.

This is the file that gets distributed in the `dist` directory.

Then run the following commands:
```
npm version patch
```

This command will bump the version of the pattern library by one patch number (Note: publishing to npm requires that a new version number be supplied).

When you merge your feature branch onto master, the `npm publish` script will be run and your changes will then be available when you do `npm install --save @rocketsofawesome/mirage` in the codebase that is using our styled components. There is also another command that gets run that builds the styleguide code and then publishes that code to the `gh-pages` branch. This serves the static version of the component library.


The _Rockets of Awesome Pattern Library_ (RoA PL) is an organized set of interactive, reusable components that can be used to build out more complicated modules, pages, and templates. Pattern libraries often include example elements, sample code, variations, use cases, and considerations.
***
When building a pattern library, you should consider the following for each pattern you add:

Pattern name: Giving each pattern a name makes it easier to discuss and reference them. Meaningful names help people quickly grasp what the pattern may look like and how it may be used.

Visual representation: What does the pattern look like? An interactive visual representation of the pattern can show different states (like active, focus, hover) and include other variations.

Design elements: Add a downloadable design file that can be easily edited. Designers can then incorporate the pattern into their workflow more quickly. Code samples: Sample code includes the code that defines the semantic structure, visual style, and behavior for each pattern. For web-based libraries, this would be the HTML, CSS, and Javascript. In most cases, the CSS and Javascript should
already be defined in existing stylesheets and scripts. Sample code should document how to apply those styles and behaviors.

Variations: Some patterns have multiple variations. Show each of the visual variants, how to implement them, and what problems they are intended to solve. Use cases: Use cases define where and how to use patterns most effectively. They may even suggest alternative patterns for specific circumstances, good pattern combinations, and examples of when NOT to use the pattern.

Considerations: Even the best patterns have tradeoffs or potential pitfalls. Including considerations can help tell your team why (or more importantly why NOT) to use a pattern in certain circumstances. Related elements: What patterns are similar to this pattern? What patterns commonly accompany this one? Is this pattern a part of a larger component?

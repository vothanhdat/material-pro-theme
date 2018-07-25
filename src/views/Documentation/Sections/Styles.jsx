import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const files = `
components
Γö£ΓöÇΓöÇ Accordion
Γöé┬á┬á ΓööΓöÇΓöÇ Accordion.jsx
Γö£ΓöÇΓöÇ CustomButtons
Γöé┬á┬á ΓööΓöÇΓöÇ Button.jsx
Γö£ΓöÇΓöÇ CustomDropdown
Γöé┬á┬á ΓööΓöÇΓöÇ CustomDropdown.jsx
Γö£ΓöÇΓöÇ CustomFileInput
Γöé┬á┬á ΓööΓöÇΓöÇ CustomFileInput.jsx
Γö£ΓöÇΓöÇ CustomInput
Γöé┬á┬á ΓööΓöÇΓöÇ CustomInput.jsx
Γö£ΓöÇΓöÇ CustomLinearProgress
Γöé┬á┬á ΓööΓöÇΓöÇ CustomLinearProgress.jsx
Γö£ΓöÇΓöÇ CustomTabs
Γöé┬á┬á ΓööΓöÇΓöÇ CustomTabs.jsx
Γö£ΓöÇΓöÇ Footer
Γöé┬á┬á ΓööΓöÇΓöÇ Footer.jsx
Γö£ΓöÇΓöÇ Grid
Γöé┬á┬á Γö£ΓöÇΓöÇ GridContainer.jsx
Γöé┬á┬á ΓööΓöÇΓöÇ GridItem.jsx
Γö£ΓöÇΓöÇ Header
Γöé┬á┬á Γö£ΓöÇΓöÇ Header.jsx
Γöé┬á┬á ΓööΓöÇΓöÇ HeaderLinks.jsx
Γö£ΓöÇΓöÇ NavPills
Γöé┬á┬á ΓööΓöÇΓöÇ NavPills.jsx
Γö£ΓöÇΓöÇ Snackbar
Γöé┬á┬á ΓööΓöÇΓöÇ SnackbarContent.jsx
ΓööΓöÇΓöÇ Table
 ┬á┬á ΓööΓöÇΓöÇ Table.jsx
`;

function Styles() {
  return (
    <div>
      <h1>Styles</h1>
      <p>
        Like our friends from{" "}
        <a href="" target="_blank">
          Material UI
        </a>, we've used JSS syntax to style (restyle) the material ui
        components.
      </p>
      <p>
        A useful link about JSS is{" "}
        <a href="" target="_blank">
          this one here
        </a>.
      </p>
      <p>
        Material UI offers you 7 ways to override their styles, and as said
        above, we've decided to go with the third option (<a
          href=""
          target="_blank"
        >
          this one here
        </a>).
      </p>
      <p>
        All of the restyled components can be found in{" "}
        <code>src/components</code>.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {files}
      </SyntaxHighlighter>
      <p>
        If you go to any of our components you will see that somewhere at the
        beginning of the file we import <code>withStyles</code>
        from <code>material-ui</code>, then we import from{" "}
        <code>src/assets/jss/material-kit-pro-react/components</code> the
        correspondig style for that component and at the end of the file, we
        export that component's class/function with the <code>withStyles</code>
        function so that the imported style overrides the{" "}
        <code>material-ui</code> style.
      </p>
      <p>
        For a better way of understanding this variables, please take a look
        inside the <code>src/assets/jss/*</code>. You will see that all of the
        styles have a unique name that corresponds with the component name.
      </p>
      <p>
        Besides this styles, we have{" "}
        <code>src/assets/jss/material-kit-pro-react.jsx</code> with variables
        for styles, <code>src/assets/jss/material-kit-pro-react/views/*</code>{" "}
        used to style each page/view or add custom styles to our components on
        each view/page and{" "}
        <code>src/assets/jss/material-kit-pro-react/*.jsx</code> are styles for
        components that weren't extended by us, we're using them like
        material-ui, but with our styles.
      </p>
      <p>
        Beside this styles, because we've used some plugins in our demo, you
        will find some of our styles in <code>src/assets/scss</code>.
      </p>
    </div>
  );
}

export default Styles;



// WEBPACK FOOTER //
// ./src/views/Documentation/Sections/Styles.jsx
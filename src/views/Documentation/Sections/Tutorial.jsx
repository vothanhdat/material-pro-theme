import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const fileStructure = `material-kit-pro
.
Γö£ΓöÇΓöÇ CHANGELOG.md
Γö£ΓöÇΓöÇ README.md
Γö£ΓöÇΓöÇ package.json
Γö£ΓöÇΓöÇ .env
Γö£ΓöÇΓöÇ Documentation
Γöé┬á┬á Γö£ΓöÇΓöÇ assets
Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ css
Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ img
Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ faces
Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ js
Γöé┬á┬á ΓööΓöÇΓöÇ tutorial-components.html
Γö£ΓöÇΓöÇ public
Γöé┬á┬á Γö£ΓöÇΓöÇ favicon.ico
Γöé┬á┬á Γö£ΓöÇΓöÇ index.html
Γöé┬á┬á ΓööΓöÇΓöÇ manifest.json
ΓööΓöÇΓöÇ src
    Γö£ΓöÇΓöÇ assets
    Γöé┬á┬á Γö£ΓöÇΓöÇ img
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ arrow-left.cur
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ arrow-right.cur
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ assets-for-demo
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ example-pages
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ ourClients
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ presentationViewSectionComponent
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ sections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     ΓööΓöÇΓöÇ imgs.jsx
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ examples
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ faces
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ flags
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ sections
    Γöé┬á┬á Γö£ΓöÇΓöÇ jss
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ material-kit-pro-react
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ components
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ views
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ aboutUsSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ blogPostSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ blogPostsSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ componentsSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ ecommerceSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ landingPageSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ presentationSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     Γö£ΓöÇΓöÇ pricingSections
    Γöé┬á┬á Γöé┬á┬á Γöé┬á┬á     ΓööΓöÇΓöÇ sectionsSections
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ material-kit-pro-react.jsx
    Γöé┬á┬á ΓööΓöÇΓöÇ scss
    Γöé┬á┬á     Γö£ΓöÇΓöÇ core
    Γöé┬á┬á     Γöé┬á┬á Γö£ΓöÇΓöÇ mixins
    Γöé┬á┬á     Γöé┬á┬á ΓööΓöÇΓöÇ variables
    Γöé┬á┬á     Γö£ΓöÇΓöÇ plugins
    Γöé┬á┬á     ΓööΓöÇΓöÇ material-kit-pro-react.scss
    Γö£ΓöÇΓöÇ components
    Γöé┬á┬á Γö£ΓöÇΓöÇ Accordion
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Accordion.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Badge
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Badge.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Card
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ Card.jsx
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ CardAvatar.jsx
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ CardBody.jsx
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ CardFooter.jsx
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CardHeader.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Clearfix
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Clearfix.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomButtons
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Button.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomDropdown
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CustomDropdown.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomFileInput
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CustomFileInput.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomInput
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CustomInput.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomLinearProgress
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CustomLinearProgress.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomTabs
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ CustomTabs.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ CustomUpload
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ ImageUpload.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Footer
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Footer.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Grid
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ GridContainer.jsx
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ GridItem.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Header
    Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ Header.jsx
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ HeaderLinks.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ InfoArea
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ InfoArea.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Instruction
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Instruction.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Media
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Media.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ NavPills
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ NavPills.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Pagination
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Pagination.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Parallax
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Parallax.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Snackbar
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ SnackbarContent.jsx
    Γöé┬á┬á Γö£ΓöÇΓöÇ Table
    Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ Table.jsx
    Γöé┬á┬á ΓööΓöÇΓöÇ Typography
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Danger.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Info.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Muted.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Primary.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Quote.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Rose.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Small.jsx
    Γöé┬á┬á     Γö£ΓöÇΓöÇ Success.jsx
    Γöé┬á┬á     ΓööΓöÇΓöÇ Warning.jsx
    Γö£ΓöÇΓöÇ index.js
    Γö£ΓöÇΓöÇ logo.svg
    Γö£ΓöÇΓöÇ routes
    Γöé┬á┬á ΓööΓöÇΓöÇ index.jsx
    ΓööΓöÇΓöÇ views
        Γö£ΓöÇΓöÇ AboutUsPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ AboutUsPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionContact.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionDescription.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionOffice.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionServices.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionTeam.jsx
        Γö£ΓöÇΓöÇ BlogPostPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ BlogPostPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionBlogInfo.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionComments.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionSimilarStories.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionText.jsx
        Γö£ΓöÇΓöÇ BlogPostsPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ BlogPostsPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionImage.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionInterested.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionPills.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SubscribeLine.jsx
        Γö£ΓöÇΓöÇ ComponentsPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ ComponentsPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionBasics.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionCards.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionCarousel.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionContentAreas.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionFooter.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionJavascript.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionNavbars.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionNotifications.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionPills.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionPreFooter.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionTabs.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionTypography.jsx
        Γö£ΓöÇΓöÇ ContactUsPage
        Γöé┬á┬á ΓööΓöÇΓöÇ ContactUsPage.jsx
        Γö£ΓöÇΓöÇ EcommercePage
        Γöé┬á┬á Γö£ΓöÇΓöÇ EcommercePage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionBlog.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionLatestOffers.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionProducts.jsx
        Γö£ΓöÇΓöÇ LandingPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ LandingPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionProduct.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionTeam.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionWork.jsx
        Γö£ΓöÇΓöÇ LoginPage
        Γöé┬á┬á ΓööΓöÇΓöÇ LoginPage.jsx
        Γö£ΓöÇΓöÇ PresentationPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ PresentationPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionCards.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionComponents.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionContent.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionDescription.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionExamples.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionFreeDemo.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionOverview.jsx
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionPricing.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionSections.jsx
        Γö£ΓöÇΓöÇ PricingPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ PricingPage.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ Sections
        Γöé┬á┬á     Γö£ΓöÇΓöÇ SectionFeatures.jsx
        Γöé┬á┬á     ΓööΓöÇΓöÇ SectionPricing.jsx
        Γö£ΓöÇΓöÇ ProductPage
        Γöé┬á┬á ΓööΓöÇΓöÇ ProductPage.jsx
        Γö£ΓöÇΓöÇ ProfilePage
        Γöé┬á┬á ΓööΓöÇΓöÇ ProfilePage.jsx
        Γö£ΓöÇΓöÇ SectionsPage
        Γöé┬á┬á Γö£ΓöÇΓöÇ Sections
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionBlogs.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionContacts.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionFeatures.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionHeaders.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionPricing.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionProjects.jsx
        Γöé┬á┬á Γöé┬á┬á Γö£ΓöÇΓöÇ SectionTeams.jsx
        Γöé┬á┬á Γöé┬á┬á ΓööΓöÇΓöÇ SectionTestimonials.jsx
        Γöé┬á┬á ΓööΓöÇΓöÇ SectionsPage.jsx
        Γö£ΓöÇΓöÇ ShoppingCartPage
        Γöé┬á┬á ΓööΓöÇΓöÇ ShoppingCartPage.jsx
        ΓööΓöÇΓöÇ SignupPage
            ΓööΓöÇΓöÇ SignupPage.jsx`;

function Tutorial() {
  return (
    <div>
      <h1>Tutorial</h1>
      <h2>License</h2>
      <p>
        Copyright (c) 2018{" "}
        <a
          href="https://creative-tim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Tim
        </a>.
      </p>
      <p>
        When you purchase an item from Creative Tim, you are actually purchasing
        a license to use that item. All our free items are under MIT license.
        All our premium items are covered by our Personal and Developer
        licenses. In order to understand the rights and restrictions that come
        with your purchase, please read the details from our{" "}
        <a
          href="https://www.creative-tim.com/license?ref=license-page-material-kit-pro-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official License Page
        </a>.
      </p>
      <h2>Getting started</h2>
      <p>
        <b>Material Kit Pro React</b> is built on top of{" "}
        <a href="https://material-ui-next.com/" target="_blank">
          Material UI
        </a>{" "}
        using{" "}
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          create-react-app
        </a>.
      </p>
      <h3>Local Development</h3>
      <ul>
        <li>
          Install NodeJs from{" "}
          <a href="" target="_blank">
            NodeJs Official Page
          </a>
        </li>
        <li>
          Go to{" "}
          <a href="" target="_blank">
            creative tim website
          </a>{" "}
          and login into your account
        </li>
        <li>
          Go to{" "}
          <a href="" target="_blank">
            downloads
          </a>{" "}
          section on creative tim website (be sure to be logged into your
          account) - after you've bought the theme
        </li>
        <li>
          Press the download button near <b>Material Kit Pro React</b> product
          (this will download onto your computer a zip file)
        </li>
        <li>Unzip the downloaded file to a folder in your computer</li>
        <li>Open Terminal</li>
        <li>Go to your file project (where you've unzipped the product)</li>
        <li>Run in terminal</li>
        <pre className="code">
          <code>npm install</code>
        </pre>
        <li>
          Then run
          <pre className="code">
            <code>npm start</code>
          </pre>
          <div>
            If you have an error something containing
            <pre className="code">
              <code>Module not found</code>
            </pre>
          </div>
          <div>
            try
            <pre className="code">
              <code>npm install --g cross-env</code>
            </pre>
            and then try again starting the app.
          </div>
          <div>
            If this doesn't do the trick, then also change the{" "}
            <code>start script</code> inside <code>package.json</code> from
            <pre className="code">
              <code>"start": "npm-run-all -p watch-css start-js",</code>
            </pre>
            to
            <pre className="code">
              <code>
                "start": "NODE_PATH=./src npm-run-all -p watch-css start-js",
              </code>
            </pre>
          </div>
        </li>
        <li>
          (Optional) You can create a new react application like this
          <ul>
            <li>
              Run in terminal
              <pre className="code">
                <code>npm install -g create-react-app</code>
              </pre>
            </li>
            <li>Go to the folder where you want to create your app</li>
            <li>
              Run in terminal
              <pre className="code">
                <code>create-react-app your-app-name</code>
              </pre>
            </li>
            <li>
              Navigate to <code>your-app-name</code>
            </li>
            <li>
              Run in terminal
              <pre className="code">
                <code>npm start</code>
              </pre>
            </li>
            <li>
              More information ΓåÆ<a href="" target="_blank">
                create-react-app
              </a>
            </li>
          </ul>
        </li>
        <li>
          Navigateo to ΓåÆ<a href="" target="_blank">
            {" "}
            https://localhost:3000
          </a>
        </li>
        <li>
          More information ΓåÆ{" "}
          <a href="" target="_blank">
            react
          </a>
        </li>
      </ul>
      <h3>Live Production</h3>
      <ul>
        <li>
          <a href="" target="_blank">
            tutorial for deploying on heroku
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            tutorial for deploying on github pages and surge
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            tutorial for deploying on S3 and CloudFront
          </a>
        </li>
      </ul>
      <h2>Files and Folders structure</h2>
      <SyntaxHighlighter language="http" style={prism}>
        {fileStructure}
      </SyntaxHighlighter>
    </div>
  );
}
export default Tutorial;



// WEBPACK FOOTER //
// ./src/views/Documentation/Sections/Tutorial.jsx
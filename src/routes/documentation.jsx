// Getting started - aici importi paginile care vin pe Getting Started in docs sidebar
import Tutorial from "views/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "views/Documentation/Sections/RoutingSystem.jsx";
import Styles from "views/Documentation/Sections/Styles.jsx";

// Components - aici importi paginile care vin pe Components in docs sidebar
import Accordion from "views/Documentation/Sections/Accordion.jsx";
import Badge from "views/Documentation/Sections/Badge.jsx";
import Buttons from "views/Documentation/Sections/Buttons.jsx";
import Cards from "views/Documentation/Sections/Cards.jsx";
import CheckboxRadioSwitch from "views/Documentation/Sections/CheckboxRadioSwitch.jsx";
import Clearfix from "views/Documentation/Sections/Clearfix.jsx";
import Dropdown from "views/Documentation/Sections/Dropdown.jsx";
import Footer from "views/Documentation/Sections/Footer.jsx";
import FileInput from "views/Documentation/Sections/FileInput.jsx";
import Grid from "views/Documentation/Sections/Grid.jsx";
import Header from "views/Documentation/Sections/Header.jsx";
import Icons from "views/Documentation/Sections/Icons.jsx";
import InfoArea from "views/Documentation/Sections/InfoArea.jsx";
import Inputs from "views/Documentation/Sections/Inputs.jsx";
import Instruction from "views/Documentation/Sections/Instruction.jsx";
import LinearProgress from "views/Documentation/Sections/LinearProgress.jsx";
import Media from "views/Documentation/Sections/Media.jsx";
import Modal from "views/Documentation/Sections/Modal.jsx";
import NavPills from "views/Documentation/Sections/NavPills.jsx";
import Pagination from "views/Documentation/Sections/Pagination.jsx";
import Parallax from "views/Documentation/Sections/Parallax.jsx";
import Popovers from "views/Documentation/Sections/Popovers.jsx";
import Select from "views/Documentation/Sections/Select.jsx";
import SideDots from "views/Documentation/Sections/SideDots.jsx";
import Snackbar from "views/Documentation/Sections/Snackbar.jsx";
import Table from "views/Documentation/Sections/Table.jsx";
import Tabs from "views/Documentation/Sections/Tabs.jsx";
import Tooltips from "views/Documentation/Sections/Tooltips.jsx";
import Typography from "views/Documentation/Sections/Typography.jsx";
import Upload from "views/Documentation/Sections/Upload.jsx";

// Plugins - aici importi paginile care vin pe Plugins in docs sidebar
import GoogleMaps from "views/Documentation/Sections/GoogleMaps.jsx";
import Carousel from "views/Documentation/Sections/Carousel.jsx";
import DateTimePicker from "views/Documentation/Sections/DateTimePicker.jsx";
import TagsInput from "views/Documentation/Sections/TagsInput.jsx";
import ImageGallery from "views/Documentation/Sections/ImageGallery.jsx";
import Slider from "views/Documentation/Sections/Slider.jsx";

const docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      {
        path: "/documentation/routingSystem",
        name: "Routing System",
        component: RoutingSystem
      },
      {
        path: "/documentation/styles",
        name: "Styles",
        component: Styles
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/accordion",
    routes: [
      {
        path: "/documentation/accordion",
        name: "Accordion",
        component: Accordion
      },
      {
        path: "/documentation/badge",
        name: "Badge",
        component: Badge
      },
      {
        path: "/documentation/buttons",
        name: "Buttons",
        component: Buttons
      },
      {
        path: "/documentation/cards",
        name: "Cards",
        component: Cards
      },
      {
        path: "/documentation/checkbox-radio-switch",
        name: "Checkbox/Radio/Switch",
        component: CheckboxRadioSwitch
      },
      {
        path: "/documentation/clearfix",
        name: "Clearfix",
        component: Clearfix
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown
      },
      {
        path: "/documentation/footer",
        name: "Footer",
        component: Footer
      },
      {
        path: "/documentation/file-input",
        name: "File Input",
        component: FileInput
      },
      {
        path: "/documentation/grid",
        name: "Grid",
        component: Grid
      },
      {
        path: "/documentation/header",
        name: "Header",
        component: Header
      },
      {
        path: "/documentation/icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "/documentation/info-area",
        name: "Info Area",
        component: InfoArea
      },
      {
        path: "/documentation/inputs",
        name: "Inputs",
        component: Inputs
      },
      {
        path: "/documentation/instruction",
        name: "Instruction",
        component: Instruction
      },
      {
        path: "/documentation/linear-progress",
        name: "Linear Progress",
        component: LinearProgress
      },
      {
        path: "/documentation/media",
        name: "Media",
        component: Media
      },
      {
        path: "/documentation/modals",
        name: "Modal",
        component: Modal
      },
      {
        path: "/documentation/nav-pills",
        name: "Nav Pills",
        component: NavPills
      },
      {
        path: "/documentation/pagination",
        name: "Pagination",
        component: Pagination
      },
      {
        path: "/documentation/parallax",
        name: "Parallax",
        component: Parallax
      },
      {
        path: "/documentation/popovers",
        name: "Popovers",
        component: Popovers
      },
      {
        path: "/documentation/selects",
        name: "Selects",
        component: Select
      },
      {
        path: "/documentation/side-dots",
        name: "SideDots",
        component: SideDots
      },
      {
        path: "/documentation/snackbar",
        name: "Snackbar",
        component: Snackbar
      },
      {
        path: "/documentation/table",
        name: "Table",
        component: Table
      },
      {
        path: "/documentation/tabs",
        name: "Tabs",
        component: Tabs
      },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "/documentation/upload",
        name: "Upload",
        component: Upload
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      {
        path: "/documentation/google-maps",
        name: "Google Maps",
        component: GoogleMaps
      },
      {
        path: "/documentation/carousel",
        name: "Carousel",
        component: Carousel
      },
      {
        path: "/documentation/date-time-picker",
        name: "DateTimePicker",
        component: DateTimePicker
      },
      {
        path: "/documentation/tags-input",
        name: "TagsInput",
        component: TagsInput
      },
      {
        path: "/documentation/image-gallery",
        name: "ImageGallery",
        component: ImageGallery
      },
      {
        path: "/documentation/nouislider",
        name: "Slider",
        component: Slider
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default docsRoutes;



// WEBPACK FOOTER //
// ./src/routes/documentation.jsx
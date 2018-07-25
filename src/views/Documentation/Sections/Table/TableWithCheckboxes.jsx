import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
// material-ui icons
import Check from "@material-ui/icons/Check";
// core components
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1, 3, 5]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Table
        striped
        tableHead={["#", "", "Product Name", "Type", "Qty", "Price", "Amount"]}
        tableData={[
          [
            "1",
            <Checkbox
              checked={this.state.checked.indexOf(1) !== -1}
              tabIndex={-1}
              onClick={() => this.handleToggle(1)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked
              }}
            />,
            "Moleskine Agenda",
            "Office",
            "25",
            "Γé¼ 49",
            "Γé¼ 1,225"
          ],
          [
            "2",
            <Checkbox
              checked={this.state.checked.indexOf(2) !== -1}
              tabIndex={-1}
              onClick={() => this.handleToggle(2)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{
                checked: classes.checked
              }}
            />,
            "Stabilo Pen",
            "Office",
            "30",
            "Γé¼ 10",
            "Γé¼ 300"
          ],
          {
            total: true,
            colspan: "5",
            amount: (
              <span>
                <small>Γé¼</small>1,525
              </span>
            )
          }
        ]}
        customCellClasses={[
          classes.textCenter,
          classes.padding0,
          classes.textRight,
          classes.textRight
        ]}
        customClassesForCells={[0, 1, 5, 6]}
        customHeadCellClasses={[
          classes.textCenter,
          classes.textRight,
          classes.textRight
        ]}
        customHeadClassesForCells={[0, 5, 6]}
      />
    );
  }
}

export default withStyles(style)(Tables);



// WEBPACK FOOTER //
// ./src/views/Documentation/Sections/Table/TableWithCheckboxes.jsx
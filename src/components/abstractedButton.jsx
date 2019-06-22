import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    backgroundColor: "#00D79E",
    height: "41px",
    width: "auto",
    transition: "all .2s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#00D79E !important"
    }
  },
  marginMobile: {
    margin: theme.spacing.unit,
    backgroundColor: "#00D79E",
    width: "100%",
    height: "41px",
    width: "auto",
    transition: "all .2s ease-in-out",
    boxShadow: "none",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#00D79E !important"
    }
  },
  textButton: {
    height: 19,
    width: "auto",
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Open Sans",
    fontWeight: 600,
    display: "contents",
    textTransform: "none",
    cursor: "pointer"
  },
  borderDiv: {
    margin: theme.spacing.unit,
    display: "contents"
  },
  textButtonBackQuestionarie: {
    margin: theme.spacing.unit,
    color: "white",
    boxShadow: "none",
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "none",
    cursor: "pointer"
  }
});

// const TestButton = styled.button`
// color: red;
// width: ${(props) => props.width};

///props in fab  Size = small, medium, large
class AbstractedButton extends Component {
  state = {};
  render() {
    const {
      classes,
      text,
      width,
      margin,
      height,
      borderRadius,
      disabled,
      onClick,
      backgroundColor,
      border,
      fontWeight,
      fontSize,
      login
    } = this.props;
    return (
      <React.Fragment>
        <div className={classes.borderDiv}>
          <Fab
            onClick={onClick}
            disabled={disabled}
            variant="extended"
            className={login ? classes.marginMobile : classes.margin}
            style={{
              width: width,
              margin: margin,
              height: height,
              borderRadius: borderRadius,
              backgroundColor: backgroundColor,
              border: border
            }}
          >
            <label
              className={
                disabled
                  ? classes.textButtonBackQuestionarie
                  : classes.textButton
              }
            >
              {text}
            </label>
          </Fab>
        </div>
      </React.Fragment>
    );
  }
}

AbstractedButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AbstractedButton);

import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {

  componentWillUpdate() {
    // Any animation goes here!
    LayoutAnimation.spring();
  }

  renderDesc() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
        {this.renderDesc()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
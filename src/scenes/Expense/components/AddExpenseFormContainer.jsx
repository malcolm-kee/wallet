import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import { storage } from "./../../../config/firebase";

import { createExpense } from "./../../../actions/expense";

import AddExpenseForm from "./AddExpenseForm";

class AddExpenseFormContainer extends Component {
  state = {
    id: uuid(),
    category: "food",
    amount: 0.0,
    date: moment().format("YYYY-MM-DD"),
    imageUrl: null,
    imageName: null,
    uploadProgress: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFileUpload = event => {
    const { auth } = this.props;

    const file = event.target.files[0];
    const storageRef = storage.ref("user-images").child(auth.uid);
    const uploadTask = storageRef
      .child(file.name)
      .put(file, { contentType: file.type });

    uploadTask.on("state_changed", snapshot => {
      const uploadProgress =
        snapshot.bytesTransferred / snapshot.totalBytes * 100;
      this.setState({ uploadProgress });
    });

    uploadTask.then(snapshot => {
      this.setState({
        imageUrl: snapshot.downloadURL,
        imageName: file.name
      });
      this.setState({ uploadProgress: null });
    });
  };

  handleFileRemoval = () => {
    const { auth } = this.props;
    const { imageName } = this.state;

    console.log("imageName", imageName);

    const storageRef = storage.ref("user-images").child(auth.uid);
    storageRef
      .child(imageName)
      .delete()
      .then(() => {
        this.setState({
          imageUrl: null,
          imageName: null
        });
      });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { dispatchCreateExpense, history } = this.props;
    const { id, category, amount, date, imageUrl } = this.state;

    const expense = { id, category, amount, date, imageUrl };

    dispatchCreateExpense(expense);

    history.push("/");
  };

  render() {
    return (
      <AddExpenseForm
        onChange={this.handleChange}
        onFileUpload={this.handleFileUpload}
        onFileRemoval={this.handleFileRemoval}
        onSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  dispatchCreateExpense(expense) {
    dispatch(createExpense(expense));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddExpenseFormContainer)
);

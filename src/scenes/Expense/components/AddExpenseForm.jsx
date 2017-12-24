import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Image,
  ProgressBar
} from "react-bootstrap";

const AddExpenseForm = props => {
  const {
    onChange,
    onFileUpload,
    onFileRemoval,
    onSubmit,
    uploadProgress,
    category,
    amount,
    date,
    imageUrl,
    imageName
  } = props;

  return (
    <div className="container">
      <Form horizontal onSubmit={onSubmit}>
        <legend>Add Expense</legend>
        <FormGroup controlId="add-expense-category">
          <Col componentClass={ControlLabel} sm={2}>
            Category
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="select"
              name="category"
              onChange={onChange}
              value={category}
            >
              <option value="food">Eat/Drink</option>
              <option value="transportation">Transportation</option>
              <option value="love">Love</option>
              <option value="reading">Reading</option>
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="add-expense-amount">
          <Col componentClass={ControlLabel} sm={2}>
            Amount
          </Col>
          <Col sm={10}>
            <FormControl
              name="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={onChange}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="add-expense-date">
          <Col componentClass={ControlLabel} sm={2}>
            Date
          </Col>
          <Col sm={10}>
            <FormControl
              name="date"
              type="date"
              value={date}
              onChange={onChange}
            />
          </Col>
        </FormGroup>
        {uploadProgress !== null && (
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Uploading...
            </Col>
            <Col sm={10}>
              <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} />
            </Col>
          </FormGroup>
        )}
        {imageUrl && (
          <FormGroup>
            <Col sm={4} smOffset={2}>
              <Image src={imageUrl} alt={imageName} thumbnail />
            </Col>
          </FormGroup>
        )}
        <FormGroup controlId="add-expense-image">
          <Col componentClass={ControlLabel} sm={2}>
            Receipt/Image
          </Col>
          <Col sm={10}>
            {imageUrl ? (
              <Button onClick={onFileRemoval} bsSize="small">
                Remove Image
              </Button>
            ) : (
              <FormControl
                name="image"
                type="file"
                onChange={onFileUpload}
                placeholder={imageName}
              />
            )}
          </Col>
        </FormGroup>
        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddExpenseForm;

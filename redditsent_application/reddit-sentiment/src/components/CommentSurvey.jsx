import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CommentSurvey extends Component {
  state = {
    comments: [
      "big testing",
      "i dont like",
      "no thank you",
      "very good",
      "ok yes please"
    ],
    headerColors: [
      "whitesmoke",
      "whitesmoke",
      "whitesmoke",
      "whitesmoke",
      "whitesmoke"
    ],

    commentLabels: [0, 0, 0, 0, 0]
  };

  changeHeaderColorAndLabel(label, index) {
    var newHeaderColors = [...this.state.headerColors];
    var newCommentLabels = [...this.state.commentLabels];
    if (label == "Positive") {
      newCommentLabels[index] = 1;
      newHeaderColors[index] = "lightgreen";
      this.setState({
        headerColors: newHeaderColors,
        commentLabels: newCommentLabels
      });
    } else if (label == "Negative") {
      newCommentLabels[index] = 2;
      newHeaderColors[index] = "salmon";
      this.setState({
        headerColors: newHeaderColors,
        commentLabels: newCommentLabels
      });
    } else {
      newCommentLabels[index] = 0;
      newHeaderColors[index] = "whitesmoke";
      this.setState({
        headerColors: newHeaderColors,
        commentLabels: newCommentLabels
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Accordion defaultActiveKey="0">
          {this.state.comments.map((key, index) => (
            <Card key={index}>
              <Card.Header
                style={{ backgroundColor: this.state.headerColors[index] }}
              >
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  Comment {index + 1}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <div className="row">
                    <div className="col-lg-9">{key}</div>
                    <div className="col-lg-3">
                      <Form>
                        <Form.Group
                          controlId={`radio-${index}`}
                          className="float-right"
                        >
                          <Form.Check
                            onClick={() =>
                              this.changeHeaderColorAndLabel("Positive", index)
                            }
                            type="radio"
                            id={`radio-pos-${index}`}
                            label="Positive"
                            name="commentRadioGroup"
                          />

                          <Form.Check
                            onClick={() =>
                              this.changeHeaderColorAndLabel("Negative", index)
                            }
                            type="radio"
                            label="Negative"
                            id={`radio-neg-${index}`}
                            name="commentRadioGroup"
                          />
                          <Form.Check
                            onClick={() =>
                              this.changeHeaderColorAndLabel("Neither", index)
                            }
                            type="radio"
                            label="Neither"
                            id={`radio-nei-${index}`}
                            name="commentRadioGroup"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
        <Button className="mt-5" variant="primary" type="submit">
          Submit
        </Button>
      </React.Fragment>
    );
  }
}

export default CommentSurvey;

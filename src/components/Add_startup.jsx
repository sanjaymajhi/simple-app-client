import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Add_startup() {
  const history = useHistory();
  const [data, setData] = useState({ name: "", country: "" });

  const save_startup = (e) => {
    e.preventDefault();
    document.getElementById("saving").style.display = "block";
    fetch("/api/addStartup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("saving").style.display = "none";

        if (data.saved === "success") {
          const alert = document.getElementById("save-alert");
          alert.className = "fade alert alert-success show";
          alert.innerHTML = "Your details had been saved...";
          alert.style.display = "block";
          setInterval(() => {
            history.push("/");
          }, 2000);
        } else {
          let count = 1;
          const alert = document.getElementById("save-alert");
          data.errors.map((err) => {
            alert.innerHTML += count + ". " + err.msg + "<br/>";
            count++;
          });
          alert.style.display = "block";

          setInterval(() => {
            alert.style.display = "none";
          }, 2000);
        }
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <Alert id="save-alert" variant={"danger"}></Alert>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            <Form onSubmit={save_startup} onChange={handleChange}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter startup name"
                  name="name"
                  value={data.name}
                  required={true}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="country"
                  placeholder="Enter startup country"
                  name="country"
                  value={data.country}
                  required={true}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <br />
              <Spinner
                animation="border"
                variant="primary"
                size="md"
                id="saving"
                style={{ display: "none" }}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Add_startup;

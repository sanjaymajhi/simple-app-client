import React, { useState, useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function Startup_list() {
  const [data, setData] = useState([]);
  const fetchRecords = () => {
    fetch("/api/startupList", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("loading").style.display = "none";
        if (data.found === "success") {
          setData(data.details);
        } else {
          const li = document.createElement("li");
          li.innerHTML = "no data found";
          document.getElementById("list").appendChild(li);
        }
      });
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div id="list-div">
      <h2>
        List of startups
        <Spinner
          animation="border"
          variant="primary"
          id="loading"
          style={{ display: "block" }}
        />
      </h2>
      <ul id="list">
        {data.map((item) => (
          <li key={item._id}>
            {item.id + "."}&emsp;{item.name + ", " + item.country}
          </li>
        ))}
      </ul>
      <Link to="/addStartup">
        <Button>Create New</Button>
      </Link>
    </div>
  );
}

export default Startup_list;

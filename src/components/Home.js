import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 10),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div
            className="post  card"
            key={post.id}
            style={{ overflow: "hidden" }}
          >
            <img
              src={pokeball}
              alt="A pokeball"
              style={{
                position: "absolute",
                ":top": "20px",
                left: "-100px",
                opacity: "0.5",
                width: "300px",
                height: "300px",
              }}
            />
            <div className="card-content">
              <Link to={`/` + post.id}>
                <span className="card-title red-text"> {post.title}</span>
                <p> {post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center"> NO Post yet! </div>
    );
    return (
      <div className="container">
        <h4 className="center"> Home page</h4>
        {postList}
      </div>
    );
  }
}

export default Home;

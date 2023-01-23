import "./App.css";
import React from "react";
import logo from "./to-do-list-apps.png";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { text: "workout", id: uuidv4(), isDone: false },
        { text: "go to work", id: uuidv4(), isDone: false },
        { text: "do the meeting", id: uuidv4(), isDone: false },
      ],
      textP: "",
    };
  }
  handleSubmit = () =>
    (this.state.textP = ""
      ? alert("empty field")
      : this.setState({
          tasks: [
            ...this.state.tasks,
            { text: this.state.textP, id: uuidv4(), isDone: false },
          ],
        }));
  handleDelete = (a) =>
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== a) });
  handleEdit = (a) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === a ? { ...el, isDone: !el.isDone } : el
      ),
    });
  render() {
    return (
      <>
        <div className="img">
          <img src={logo} alt="logo" height={200} />
        </div>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title">Todo list</h4>
                    <div className="add-items d-flex">
                      <input
                        type="text"
                        className="form-control todo-list-input"
                        placeholder="What do you need to do today?"
                        onChange={(e) =>
                          this.setState({ textP: e.target.value })
                        }
                      />
                      <button
                        className="add btn btn-primary font-weight-bold todo-list-add-btn"
                        onClick={this.handleSubmit}
                      >
                        Add
                      </button>
                    </div>
                    <div className="list-wrapper">
                      <ul className="d-flex flex-column-reverse todo-list">
                        {this.state.tasks.map((el) => (
                          <li>
                            <p className={el.isDone ? "text" : ""}>{el.text}</p>
                            <button
                              className="btn btn-warning"
                              type="button"
                              onClick={() => this.handleEdit(el.id)}
                            >
                              edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => this.handleDelete(el.id)}
                            >
                              Delete
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

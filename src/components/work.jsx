import React, { Component } from "react";

const projects = [
  {
    image: "url(images/work01.jpeg)",
    title: "Fizz",
    type: "Application",
  },
  {
    image: "url(images/work02.jpeg)",
    title: "Liiteri",
    type: "Application",
  },
  {
    image: "url(images/work03.png)",
    title: "Lapin Ruokapiste",
    type: "Application",
  },
  {
    image: "url(images/work04.jpeg)",
    title: "Toitasuomesta",
    type: "Application",
  },
  {
    image: "url(images/work05.jpeg)",
    title: "Smeen",
    type: "Application",
  },
];
export default class Work extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">Recent Work</h2>
              </div>
            </div>
            <div className="row">
              {projects.map((project) => {
                return (
                  <div
                    className="col-md-6 animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div
                      className="project"
                      style={{ backgroundImage: project.image }}
                    >
                      <div className="desc">
                        <div className="con">
                          <h3>
                            <a href="work.html">{project.title}</a>
                          </h3>
                          <span>{project.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

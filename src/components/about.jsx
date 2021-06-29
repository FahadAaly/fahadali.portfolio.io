import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Hi, I'm a full-stack developer specialised in frontend
                        and backend development for complex scalable web apps.
                      </p>
                      <p>I have done my graduation in Computer Science.</p>
                      <p>
                        I have about over 3 years of working experience in the
                        software development field, building projects for the
                        web and mobile platforms, using different programming
                        tools like JavaScript, TypeScript, PHP, HTML & CSS.
                      </p>
                      <p>
                        I love exploring new technologies and mostly focused on
                        frontend technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

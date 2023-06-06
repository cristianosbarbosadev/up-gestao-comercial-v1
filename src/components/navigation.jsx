import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img className="navbar-logo" src="img/logo.png" alt="logo" />
          </a>{' '}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                sobre nos
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                serviços e produtos
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Portifólio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                time
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

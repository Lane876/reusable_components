import React, { useEffect } from "react";
import "./RotatingNavigation.css";

const RotatingNavigation = () => {
  useEffect(() => {
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const container = document.querySelector(".container");

    open.addEventListener("click", () => container.classList.add("show-nav"));
    close.addEventListener("click", () =>
      container.classList.remove("show-nav")
    );
  }, []);

  return (
    <>
      <div className="container">
        <div className="circle-container">
          <div className="circle">
            <button id="close">
              <i className="fas fa-times"></i>
            </button>
            <button id="open">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div className="content">
          <h1>AMAZING NAVIGATION</h1>
          <small>MILAN MILENKOVIC</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            quasi voluptatibus! Corrupti tempora eos est pariatur possimus omnis
            deserunt voluptas repellat natus nemo dolorum laborum asperiores,
            aliquid nam expedita quibusdam ipsam quisquam explicabo,
            necessitatibus illo qui repellendus maxime quod temporibus! Vel,
            sapiente! Aperiam ipsum voluptatibus odit, necessitatibus
            consectetur fugit beatae nam delectus dolorum explicabo, pariatur
            veniam et deleniti nobis odio cupiditate officiis ab natus optio
            ipsa laboriosam. Iure, ipsa. Saepe odio nihil tempora sapiente iure
            possimus. Tempore aspernatur ratione quae error alias accusantium
            voluptates quos quidem laborum hic. Modi fuga totam in nulla
            deserunt odit commodi consectetur dolorem possimus illo!
          </p>

          <h3>MY DOWG</h3>
          <img
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="dog"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            ipsam blanditiis. Aperiam officia, iusto dolore optio pariatur, ab
            quod nihil corporis, praesentium rem debitis. Ullam placeat
            doloremque delectus hic voluptatum corrupti dolores, ex distinctio
            atque assumenda animi, id eum tempore illum voluptatem nulla, esse
            ipsum. Laudantium rem, laborum doloremque nostrum consequatur optio
            pariatur nesciunt quibusdam illo. Nulla non dicta ea, vel suscipit
            quae veritatis voluptatibus nostrum repudiandae culpa alias
            doloribus illum possimus placeat, sint quis!
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i>Home
          </li>
          <li>
            <i className="fas fa-user-alt"></i>About
          </li>
          <li>
            <i className="fas fa-envelope"></i>Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RotatingNavigation;

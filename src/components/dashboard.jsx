import React from "react";
import "../Css/dashboard.css";
import ProfileImg from '../resources/people.png'
function dashboard() {
  // const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

  // allSideMenu.forEach((item) => {
  //   const li = item.parentElement;

  //   item.addEventListener("click", function () {
  //     allSideMenu.forEach((i) => {
  //       i.parentElement.classList.remove("active");
  //     });
  //     li.classList.add("active");
  //   });
  // });
  // // TOGGLE SIDEBAR
  // const menuBar = document.querySelector("#content nav .bx.bx-menu");
  // const sidebar = document.getElementById("sidebar");

  // menuBar.addEventListener("click", function () {
  //   sidebar.classList.toggle("hide");
  // });
  // const searchButton = document.querySelector(
  //   "#content nav form .form-input button"
  // );
  // const searchButtonIcon = document.querySelector(
  //   "#content nav form .form-input button .bx"
  // );
  // const searchForm = document.querySelector("#content nav form");

  // searchButton.addEventListener("click", function (e) {
  //   if (window.innerWidth < 576) {
  //     e.preventDefault();
  //     searchForm.classList.toggle("show");
  //     if (searchForm.classList.contains("show")) {
  //       searchButtonIcon.classList.replace("bx-search", "bx-x");
  //     } else {
  //       searchButtonIcon.classList.replace("bx-x", "bx-search");
  //     }
  //   }
  // });
  // if (window.innerWidth < 768) {
  //   sidebar.classList.add("hide");
  // } else if (window.innerWidth > 576) {
  //   searchButtonIcon.classList.replace("bx-x", "bx-search");
  //   searchForm.classList.remove("show");
  // }
  // window.addEventListener("resize", function () {
  //   if (this.innerWidth > 576) {
  //     searchButtonIcon.classList.replace("bx-x", "bx-search");
  //     searchForm.classList.remove("show");
  //   }
  // });
  // const switchMode = document.getElementById("switch-mode");

  // switchMode.addEventListener("change", function () {
  //   if (this.checked) {
  //     document.body.classList.remove("dark");
  //   } else {
  //     document.body.classList.add("dark");
  //   }
  // });
  return (
    <>
      <section class="dark">
        <section id="sidebar">
          <a href="#" class="brand">
            <i class="bx bxs-smile"></i>
            <span class="text">AdminHub</span>
          </a>
          <ul class="side-menu top">
            <li class="active">
              <a href="#">
                <i class="bx bxs-dashboard"></i>
                <span class="text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-doughnut-chart"></i>
                <span class="text">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-message-dots"></i>
                <span class="text">History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-group"></i>
                <span class="text">Help</span>
              </a>
            </li>
          </ul>
          <ul class="side-menu">
            <li>
              <a href="#">
                <i class="bx bxs-cog"></i>
                <span class="text">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" class="logout">
                <i class="bx bxs-log-out-circle"></i>
                <span class="text">Logout</span>
              </a>
            </li>
          </ul>
        </section>
        {/* <!-- SIDEBAR -->
<!-- CONTENT --> */}
        <section id="content">
          {/* <!-- NAVBAR --> */}
          <nav>
            <i class="bx bx-menu"></i>
            <a href="#" class="nav-link"></a>
            <form action="#">
              <div class="form-input">
                <input type="search" placeholder="Search Stock" />
                <button type="submit" class="search-btn">
                  <i class="bx bx-search"></i>
                </button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" class="profile">
              <img src={ProfileImg} />
            </a>
          </nav>
          {/* <!-- NAVBAR --> */}

          {/* <!-- MAIN --> */}
          <main>
            <div class="head-title">
              <div class="left">
                <h1>Dashboard</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                  </li>
                  <li>
                    <a class="active" href="#">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul class="box-info">
              <li>
                <i class="bx bxs-dollar-circle"></i>
                <span class="text">
                  <h3>1020</h3>
                  <p>Profit(+/-)</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-group"></i>
                <span class="text">
                  <h3>2834</h3>
                  <p>Top Gainer</p>
                </span>
              </li>
              <li>
                <i class="bx bxs-dollar-circle"></i>
                <span class="text">
                  <h3>$2543</h3>
                  <p>asdsdksdj</p>
                </span>
              </li>
            </ul>

            <div class="table-data">
              <div class="order">
                <div class="head">
                  <h3>Portfolio</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Current Price</th>
                      <th>Profit(+/-)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span class="status completed">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span class="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span class="status process">Process</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span class="status pending">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span class="status completed">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="todo">
                <div class="head">
                  <h3>Top Performers</h3>
                </div>
                <ul class="todo-list">
                  <li class="completed">
                    <p>Todo List</p>
                  </li>
                  <li class="completed">
                    <p>Todo List</p>
                  </li>
                  <li class="not-completed">
                    <p>Todo List</p>
                  </li>
                  <li class="completed">
                    <p>Todo List</p>
                  </li>
                  <li class="not-completed">
                    <p>Todo List</p>
                  </li>
                </ul>
              </div>
            </div>
          </main>
          {/* <!-- MAIN --> */}
        </section>
      </section>
    </>
  );
}

export default dashboard;

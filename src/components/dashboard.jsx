import React from "react";
import "../Css/dashboard.css";
import data from "./data";
function Dashboard() {
  const [credit,setCredit] = React.useState(0);
  const [topGainer, setTopGainer] = React.useState(0);
  const [portfolio,setPortfolio] = React.useState([]);
  const [totalProfite, setTotalProfit] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(10000);
  console.log(data)
  React.useEffect(()=>{
    setCredit(data.userData.balance);
    setPortfolio(data.userData.portfolio);
  }, [])
  React.useEffect(()=>{
    var largest = 0;
    var sum = 0;
    for (let i = 0; i < portfolio.length; i++) {
        sum = sum + (currentPrice - (portfolio[i].price * portfolio[i].qty));
        if(currentPrice - (portfolio[i].price * portfolio[i].qty) > largest){
          largest = currentPrice - (portfolio[i].price * portfolio[i].qty);
        }
    }
    setTopGainer(largest);
    setTotalProfit(sum);
  
  }, [portfolio]);
  function handleClick(e){
    window.location.href = 'analysis'
    // console.log(e);
  }
  const render = portfolio.map((element, index)=>{
    console.log(element)
    return(
      <tr>
        <td className='align-items-center'>
          <p>{element.stock}</p>
        </td>
        <td>
          <p>{element.price}</p>
          </td>
        <td>
          <p class="status completed">element.qty</p>
        </td>
        <td>
          <button onClick={handleClick}>Analysis</button>
        </td>
      </tr>
    )
  });
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
      <section className="dark">
        <section id="sidebar">
          <a href="#" className="brand">
            <i className="bx bxs-smile">hi</i>
            <span className="text">AdminHub</span>
          </a>
          <ul className="side-menu top">
            <li className="active">
              <a href="#">
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-doughnut-chart"></i>
                <span className="text">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-message-dots"></i>
                <span className="text">History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-group"></i>
                <span className="text">Help</span>
              </a>
            </li>
          </ul>
          <ul className="side-menu">
            <li>
              <a href="#">
                <i className="bx bxs-cog"></i>
                <span className="text">Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <i className="bx bxs-log-out-circle"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </section>
        {/* <!-- SIDEBAR -->
<!-- CONTENT --> */}
        <section id="content">
          {/* <!-- NAVBAR --> */}
          <nav>
            <i className="bx bx-menu"></i>
            <a href="#" className="nav-link"></a>
            <form action="#">
              <div className="form-input">
                <input type="search" placeholder="Search Stock" />
                <button type="submit" className="search-btn">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label htmlFor="switch-mode" className="switch-mode"></label>
          </nav>
          {/* <!-- NAVBAR --> */}

          {/* <!-- MAIN --> */}
          <main style={{backgroundColor : 'white'}}>
            <div className="head-title">
              <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="box-info">
              <li>
                <i className="bx bxs-dollar-circle"></i>
                <span className="text">
                  <h3>{totalProfite}</h3>
                  <p>Profit(+/-)</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-group"></i>
                <span className="text">
                  <h3>{topGainer}</h3>
                  <p>Top Gainer</p>
                </span>
              </li>
              <li>
                <i className="bx bxs-dollar-circle"></i>
                <span className="text">
                  <h3>{credit}</h3>
                  <p>Balance</p>
                </span>
              </li>
            </ul>

            <div className="table-data">
              <div className="card" style={{width : '35vw'}}>
                <div className="head">
                  <h3>Portfolio</h3>
                </div>
                <table>
                  <thead>
                    <tr >
                      <th >Stock</th>
                      <th>Bought Price</th>
                      <th>Quantity</th>
                      <th>Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {render}
                  </tbody>
                  </table>

              </div>
              <div className="todo">
                <div className="head">
                  <h3>Top Performers</h3>
                </div>
                <ul className="todo-list">
                  <li className="completed">
                    <p>Todo List</p>
                  </li>
                  <li className="completed">
                    <p>Todo List</p>
                  </li>
                  <li className="not-completed">
                    <p>Todo List</p>
                  </li>
                  <li className="completed">
                    <p>Todo List</p>
                  </li>
                  <li className="not-completed">
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

export default Dashboard;
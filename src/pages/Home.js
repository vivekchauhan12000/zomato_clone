import React from 'react'
import '../home.css';
//import Card from "../components/Card"
import {Link} from 'react-router-dom';
//import List from "../components/List"
//import Login from "../components/Loginbutton";
//import Logout from "../components/LogoutButton";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
    <img src={"https://github.com/vivekchauhan12000/shareimg/blob/main/homepageimg.png?raw=true"} alt="def" style={{width: '100%', height: '450px'}} />
    <div>
      <div className="logo">
        <p>e!</p>
      </div>
      <div className="headings">
        Find the best restaurants, cafes, bars
      </div>
    </div>
    <div className="quicksearch">
      <p className="quicksearchHeading">
        Quick Searches
      </p>
      <p className="quicksearchSubHeading">
        Discover restaurants by type of meal
      </p>
      <div className="container-fluid">
        <div className="row" style={{ display: "flex",flexDirection: "row"}}>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/breakfast.jpg?raw=true" alt="alvatar" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  Breakfast
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive breakfast.
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
          <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/lunch.jpg?raw=true" alt="def" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  Lunch
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive lunch.
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
          <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/snacks.png?raw=true" alt="def" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  Snacks
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive snacks.
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="row" style={{ display: "flex",flexDirection: "row"}}>
          <div className="col-sm-4 col-md-4 col-lg-4">
          <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/dinner.png?raw=true" alt="def" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  Dinner
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive dinner.
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
          <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/drinks.png?raw=true" alt="def" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  Drinks
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive drinks.
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
          <Link to="/search">
            <div className="tileContainer">
              <div className="tileComponent1">
                <img src="https://github.com/vivekchauhan12000/shareimg/blob/main/nightlife.png?raw=true" alt="def" height={150} width={140} />
              </div>
              <div className="tileComponent2">
                <div className="componentHeading">
                  NightLife
                </div>
                <div className="componentSubHeading">
                  Start your day with exclusive nightlife.
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

import './App.css';
import { connect } from 'react-redux';
import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
// import 'antd/dist/reset.css';
import Conatct from './Contact';
import News from './News';
import Contronller from './controller';

function App() {
  return (
    <div>
      <div className="container">
        <button style={{ background: 'pink', borderRadius: '10px', margin: 20 }}>
          <ul style={{ display: 'flex', margin: '15px 5px' }}>
            <li style={{ margin: ' 5px 10px 5px 0' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: ' 5px 10px 0 ' }}>
              <Link to="/contact">Conatct</Link>
            </li>
            <li style={{ margin: ' 5px 10px' }}>
              <Link to="/new">New</Link>
            </li>
            <li style={{ margin: ' 5px 10px' }}>
              <Link to="/contronller">Contronller</Link>
            </li>
          </ul>
        </button>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Contact" element={<Conatct />} />
          <Route path="/new" element={<News />} />
          <Route path="/contronller" element={<Contronller />} />
        </Routes>

      </div>

    </div>
  );
}
function mapStateToProps(state) {
  return { myValue: state.value };
}

export default connect(mapStateToProps)(App);


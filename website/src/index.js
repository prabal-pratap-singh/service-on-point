import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/index';
import AttributeCard from './component/attribute-card'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const commonProps = {imagePath: 'https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', attributeContentHeading:"Creative Agency", attributeContentBody:"we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out", badge:{imagePath:"https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}, altName:"altName"};
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <AttributeCard commonProps={commonProps}/>
    {/* <AttributeCard commonProps={commonProps}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

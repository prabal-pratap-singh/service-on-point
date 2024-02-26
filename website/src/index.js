import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/index';
import AttributeCard from './component/attribute-card'
import AttributeDeck from './component/attribute-deck'
import CircleImg from './component/circle-img'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const commonProps = {imagePath: 'https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', attributeContentHeading:"Creative Agency", attributeContentBody:"we create path-breaking work that challenges the status qua and positively impact our client's ubsiness. We make sure how we communicate, and design helps our brand stand out", badge:{imagePath:"https://images.pexels.com/photos/17866318/pexels-photo-17866318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}, altName:"altName"};
const common = {imageUrl: 'https://s3-alpha-sig.figma.com/img/7c4c/ec3d/369ca4e8e5d93dc2438c5d127031ce08?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsLSeEqmxsACr79Dz30z8b96Lu5r80r7~UUgIHWafsaHujCjBnXGKxT7Juz7WjJfVLT11VtMEPES6qwWsd9e0t5z-DXlYd5-GBjJKTjRwFxEyj9OWFF7qDV0slboB03ACpUDTftrH4FjVPrFE3wlSscoQXw1vRIPHZSRB6LaevsnSYiWI8a-puMvu7RsG-HE-zV362sWR9Ww8SfFbNKf8F6xfGtm7I-6p8YWRu1eceQCqtsf95daRYxL556NyyuGaqD1Cd6TOeXdguq7~XoJauCGo15nEWIPiyaJrbr-UFKJFrFA5FkUUOkyuMxlvHBdP~bv1bzHxbM261iMUuRj1A__', width: "588px", height: "588px"}
root.render(
  <React.StrictMode>
    <Home />
    {/* <AttributeCard commonProps={commonProps}/> */}
    {/* <AttributeDeck/>  */}
    {/* <AttributeCard commonProps={commonProps}/> */}
    {/* <CircleImg imgProps = {common}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

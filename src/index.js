import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ExpenseItem from './components/ExpenseItem';

// array mapping.....
// const myarray =['101','kanchan'];
// const mylist =myarray.map((abc)=><p>{abc}</p>);
// const container =document.getElementById('root');
// const root =ReactDOM.createRoot(container);
// root.render(mylist);

// if else loop.........
// function AppHome(){
//     return <h2>Home</h2>;
// }
// function AppLogin(){
//   return <h2>Login</h2>;
// }
// function MyPage(props){
//   const pagename = props.pagename;
//   if(pagename){
//     return <AppHome/>;

//   }
//   else{
//     return <AppLogin/>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyPage pagename={true}/>);

// normal index...........
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { data } from "./data/data.jsx";
import "./Home.css";
// import { Component } from "react";

class Home extends React.Component{
  state={
    list: data,
    name: '',
    price: 0
  }
  render(){
    // id to console
    let test = (id) =>{
      console.log(id)
    }

    // filter
    const onNameFilter =({target:{value}})=>{
      let res = data.filter((vl)=>vl.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      this.setState({list: res})
    }
    const onPriceFilter =({target:{value}})=>{
      let res = data.filter((vl)=>vl.price === Number(value))
      this.setState({list: res})
    }


    // delete
    const onDelete = (id)=>{
      let res = this.state.list.filter((vl)=> vl.id !== id);
      this.setState({list:res})
    }


    // create
    const onCreate = ()=>{
      
      this.setState((state)=>{
        console.log(this.state.name, this.state.price);
        return {list: [
          ...state.list,{img: this.state.img, name: this.state.name, price: this.state.price,}
        ]}
      })
    }
    return (
      <>
        <div className="globalWrapper">
          <h1>Search</h1>
          <div className="search">
          {/* <Search />   */}
          <input className="input" onChange={onNameFilter} type="text" placeholder="name"/>
          <input className="input" onChange={onPriceFilter} type="number" placeholder="price"/>
          </div>
          <h1>Create</h1>
          <div className="search">
            <input className="input" onChange={({target: {value}})=>{this.setState({img:value})}} placeholder="image" type="file" accept="image/*,image/heif,image/heic"></input>
            <input className="input" onChange={({target: {value}})=>{this.setState({name:value})}} placeholder="name" type="text" />
            <input className="input" onChange={({target: {value}})=>{this.setState({price:value})}} placeholder="price" type="number" />
            <button className="greenBtn" onClick={onCreate}>add</button>
          </div>
          <div className="dsplay">
          {this.state.list.map((value, index) => {
            return (
              <div className="">
                <Card
                  flower={value.img}
                  Name={value.name}
                  price={value.price}
                  nonprice={value.nonprice}
                />
                <button className="greenBtn"  onClick={()=>test(value.name)}>select</button>
                <button className="deleteBtn" onClick={()=>onDelete(value.id)}>delete</button>
              </div>
            );
          })}
          </div>
        </div>
      </>
    );
  }
};

export default Home;

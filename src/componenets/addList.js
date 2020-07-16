import React, { Component } from 'react'
import propTypes from "prop-types";


export class AddList extends Component {

    state={
        visibility: false,
        v: " "
    }

    onclick=()=>{
        this.setState({visibility:true})
        console.log(this.state.visibility)
    }

    onChangeValue=(e)=> {
        console.log("kkk")
        this.setState({v:e.target.value})
    }

    onSubmitElement=(e)=>{
            e.preventDefault();
            this.props.addNewList(this.state.v)
            this.setState({ v:''})
            this.setState({visibility:false})
    }

    render() {

        return (

        <div>
            <section className=" flex w-screen p-10 justify-center items-start">
            <button id="btn" onClick={this.onclick} className="py-3 px-10 bg-gray-800 text-white rounded text shadow-xl">New List</button>
            </section>

            
           { this.state.visibility ? 
           
             
            <div className=" fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-gray-800" >
            <div className="bg-white py-16 rounded-lg shadow-xl relative max-w-sm">
                <p className="text-center text-gray-700 font-bold text-4xl">New tasks list</p>
                <form onSubmit={this.onSubmitElement} className="flex-row text-center justify-center items-center mt-6">
                    <input 
                        className="rounded-l-full border-black w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                        type="text" 
                        name="v"
                        placeholder="Add the name of the list" 
                        style={{flex:10}} 
                        value={this.state.value} 
                        onChange={this.onChangeValue}
                    />
					<input
						className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                        value="Cancel"
                        type="button"
                        onClick={this.onclick}
                    />
                    <input 
                        type="submit"
                        value="Confirm"
                        className="focus:outline-none px-4 bg-red-500 p-3 ml-3 rounded-lg text-white hover:bg-red-400"
                    />
				
                </form>
                <div className="absolute  w-full">
                <svg
                    className="fill-current text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                    fillOpacity="1"
                    d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,
            96L1440,320L1320,320C1200,320,960,320,720,
            320C480,320,240,320,120,320L0,320Z"
                    ></path>
                </svg>
                <div className="h-6 w-full bg-red-500 rounded-b-lg"></div>
                </div>
            </div>
            </div>

            : null }  

        </div>
         
        )
    }
}


export default AddList

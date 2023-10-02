import React,{Component} from "react";
import Child from "./Child";

class App extends Component{
        constructor(){
                super()
                console.log("Constructor Initialized")
                this.state = {
                        parentName: "Kani",
                        showChild:false
                }
                this.updateParentName =this.updateParentName.bind(this)
                this.showChildName = this.showChildName.bind(this)
                this.hideChildName = this.hideChildName.bind(this)
        }
        updateParentName(){
                this.setState({parentName:"Agnes"})
        }
        showChildName(){
                this.setState({showChild:true})
        }
        hideChildName(){
                this.setState({showChild:false})
        }
        componentDidMount(){
                console.log("Component DID mount called");
        }
        componentDidUpdate(){
                console.log("Component DID update called");
        }
        shouldComponentUpdate(){
                console.log("should Component called");
                return true
        }
        render(){
                console.log("Render called")
                return(
                        <>
                                <h1> Component LifeCycle</h1>
                                <button onClick={this.updateParentName}>Update Parent</button>
                                <h2>{this.state.parentName}</h2>
                                <button onClick={this.showChildName}>Show Child</button>
                                <button onClick={this.hideChildName}>Hide Child</button>
                                {this.state.showChild ?
                                <h2><Child/></h2>
                                :null}
                        </>
                )
        }
}
export default App
import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
//import your deployed contract's json file here
//import MyContract from '../../build/contracts/MyContract.json'

//Import needed CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: "0x0"
    }

    //Define web3 provider:
    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider 
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
    }

    //web3 instance here:
    this.web3 = new Web3(this.web3Provider)

    /*
    //Read contract and pass provider to it:
    this.myContract = TruffleContract(MyContract)
    this.myContract.setProvider(this.web3Provider)

    //Bind "this" to functions
    this.watchEvents = this.watchEvents.bind(this)
    */
  }

  componentDidMount() {
    //get the coinbase of the user, and set it in state. Then get a instance of the contract
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
      this.myContract.deployed().then((myContractInstance) => {
        this.myContractInstance = myContractInstance
        this.load()
        this.watchEvents()
      })
    })
  }

  load(){
    //Use this function to load and reload data
  }

  watchEvents() {
    //Use this function to start listening to events
  }

  render() {
    return (
      <div>
        My Dapp
      </div>
    )
  }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)

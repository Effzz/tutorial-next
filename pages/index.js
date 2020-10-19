import { Component } from 'react'
import Axios from 'axios'
import Layout from '../components/Layout'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            loading: true,
            data: []
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            this.setState({
                data: res.data,
                loading: false
            })
        })
    }

    render() {
        const { loading, data } = this.state
        
        if(loading){
            return(<span>Fetching data...</span>)
        }

        return (
            <Layout>
                <h3>Home Page</h3>
                {
                    data.map((el, index) => {
                        return(
                            <ul key={ index }>
                                <li>{ el.title }</li>
                            </ul>
                        )
                    })
                }
            </Layout>
        )
    }
}

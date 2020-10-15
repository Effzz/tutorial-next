import { Component } from 'react'
import Axios from 'axios'
import Link from 'next/link'

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
            <div>
                <h3>Home Page</h3>
                <Link href="/order">
                    <a>Order Page</a>
                </Link>
                {
                    data.map((el, index) => {
                        return(
                            <ul key={ index }>
                                <li>{ el.title }</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

import React,{Component} from 'react'
import FeaturedComp from '../components/FeaturedComp'

 export default class Home extends Component {
    
    constructor(props){
        
        super(props)
        this.state={
            // options:[{
            //     name:"single-economy",
            //      slug:'single-economy',
            //      type:"single",
            //     price:100,
            //      size:200,
            //     capacity:1,
            //     pets:false,
            //     breakfast:false,
            //     featured:false,
            // }]
                options:[
                    {
                    id:1,
                    title:"Single-economy",
                    type:"single",
                    path:"/rooms"
                },
                {
                    id:2,
                    title:"Double-economy",
                    type:"Double",
                    path:"/rooms",
                },
            ]
        }
    }
   
   
    render(){
        
        return (
            <div>
            <FeaturedComp optiondata={this.state.options}/>
           
            
            </div>
           
            
        )
    }
    
}

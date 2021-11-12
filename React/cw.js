// const ReactElement = React.createElement('button', null, 'My button 3')



// function ReactComponent (props) {

//     function clickHandler(name) {
//         alert(`Hello ${name}`)
//     }

//     function changeHandler(event) {
//         console.log(event.currentTarget.value)
//     }


//     return  ( 
//         <div>
//             <button onClick={() => clickHandler( 'Jhone')}> {props.text} </button>
//             <input onChange={changeHandler} type="text"/>
//         </div>
//     )
// }




class ReactComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: 'default text', 
            list: [
            {id:0, data: "123"},
            {id:1, data: "4"},
            {id:2, data: "5"},
            {id:3, data: "6"},
        ]}
       

        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    clickHandler(name) {
                alert(`Hello ${name}`)
            }
        
    changeHandler(event) {
                this.setState((state, props) => ({text: 'state text:' + state.text + ', ' + 'props text: ' + props.text}))
                console.log(event.currentTarget.value)
                this.setState({list: this.state.list.filter(item => item.id !== +event.currentTarget.value)})
            }


    render() {
        return  ( 
            <div>
                <button onClick={() => this.clickHandler( 'Jhone')}> {this.props.text} </button>
                <input onChange={this.changeHandler} type="text"/><br/>
                {this.state.text}
                {this.state.list.map( item => <div key={item.id}>{item.data}</div>)}
            </div>
        )
    }
}

ReactDOM.render(<ReactComponent text='props text 2e2'/>, document.getElementById('like_button_container'))





function Main() {
    const [countLikes, setCountLikes] = React.useState(0);


    const h2 = React.createElement('h2', {key: 1}, 'Header');
    const p = React.createElement('p', {key: 2}, 'text');
    const div = React.createElement('div', {key: 4}, countLikes);

    // let countLikes = 0; 

    const like = function(event) {
 
        // console.log('Click!', event, this, event.target);
        // countLikes++;
        // console.log('CountLikes:', countLikes);

        let count = countLikes;
        count++;
        setCountLikes(count);
    };

    const btn = React.createElement('button', {key: 3, onClick: like}, 'Like');
    const main = React.createElement('main', {className: 'main'}, [h2, p, btn, div]);
    return main;
}

ReactDOM.render (
    React.createElement(Main),
    document.querySelector('.app4')
)


class MainClass extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            countLikes: 0
        }

        this.like = this.like.bind(this);


    }

    like = function(event) {
 
        // console.log('Click!', event, this, event.target);
        // countLikes++;
        // console.log('CountLikes:', countLikes);

        let count = this.state.countLikes;

        count++;
        this.setState({
            countLikes: count
        })
    };

    render () {
        const h2 = React.createElement('h2', {key: 1}, 'Header');
        const p = React.createElement('p', {key: 2}, 'text');
        const div = React.createElement('div', {key: 4}, this.state.countLikes);
        // let countLikes = 0; 

        



    
        const btn = React.createElement('button', {key: 3, onClick: this.like}, 'Like');
        const main = React.createElement('main', {className: 'main'}, [h2, p, btn, div]);
        return main;
    }
}

ReactDOM.render (
    React.createElement(MainClass),
    document.querySelector('.app5')
)















ReactDOM.render (
    <React.Fragment>
        <header className="header">HEADER</header>
        <main className="main">
            <h2>My Header</h2>
            <p>TEXT</p>
        </main>
    </React.Fragment>,
    document.querySelector('.app6')
); 
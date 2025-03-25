import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = (props) =>{
    return(

        <div>
            {props.children}
        </div>
    )
}
const Main = () =>{
    return(
        <div>
            <h1>Main component</h1>
            <Title>
                <h1>hello</h1>
                <h2>hello</h2>
                <h3>hello</h3>
                <h4>hello</h4>
                <h5>hello</h5>
                <h6>hello</h6>
            </Title>
        </div>
        
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main></Main>)









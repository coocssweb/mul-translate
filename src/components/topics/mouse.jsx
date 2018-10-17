import React from 'react';
class Cat extends React.Component {
    render () {
        const mouse = this.props.mouse;
        return (
            <h1>left: {mouse.x}, top: {mouse.y}</h1>
        );
    }
}

class Mouse extends React.Component {
    constructor (props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove (event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render () {
        return (
            <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>

                {/*
                 Instead of providing a static representation of what <Mouse> renders,
                 use the `render` prop to dynamically determine what to render.
                 */}
                {this.props.renderdddddd(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render () {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse renderdddddd={mouse => (
                    <Cat mouse={mouse}/>
                )}>

                </Mouse>
            </div>
        );
    }
}

export default MouseTracker;

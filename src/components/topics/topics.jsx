import React, { Component } from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import Mouse from './mouse';

// 一个使用到ThemedButton组件的中间组件
function Toolbar (props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class Topics extends Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }

    render () {
        // console.log(this.props);
        return (
            <div>
                <h2>Topic</h2>
                <div>{this.props.match.path}</div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <section>
                    <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton />
                    </ThemeContext.Provider>
                </section>
                <section>
                    <Mouse />
                </section>
            </div>
        );
    }
};

export default Topics;

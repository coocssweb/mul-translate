import '@css/pages/home.scss';
import React, { Component } from 'react';
import Header from './header';
import Toolbar from './toolbar';
import TranslateOutput from './translateOutput';
import TranslateInput from './translateInput';
import TranslateHistory from './translateHistory';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            content: '',
            prevContent: '',
        };
    }
    componentWillMount () {
        this.props.getLanguages();
    }

    componentDidMount () {

    }

    componentWillReceiveProps () {

    }

    componentWillUnMount () {
        clearInterval(this.timerID);
    }

    tickTranslate () {
        // 已经翻译过了
        if (this.props.output.source === this.state.content) {
            return false;
        }

        // 正在输入中
        if (this.state.content !== this.state.prevContent) {
            this.state.prevContent = this.state.content;
            return false;
        }

        if (!this.state.content) {
            return;
        }

        this.props.translate({from: '', to: '', query: this.state.content});
    }

    onTranslate (from, to) {
        this.props.translate({from: from.id, to: to.id, query: this.state.content});
    }

    onInput (e) {
        if (!e.target.content) {
            this.props.clearResult();
        }

        clearInterval(this.timerID);

        this.timerID = setInterval(() => {
            this.tickTranslate();
        }, 500);

        this.setState({
            content: typeof e === 'string' ? e : e.target.value
        });
    }

    onClear (e) {
        this.setState({
            content: ''
        });
        this.props.clearResult();
    }

    render () {
        return (
            <div className="layout">
                <Header/>
                <div className="divide-wrap">
                    <div className="divide-before"></div>
                    <div className="divide-after"></div>
                    <div className="divide"></div>
                </div>

                <Toolbar {...this.props} onTranslate={this.onTranslate.bind(this)}/>

                <div className="translate clearfix">
                    <div className="translate-left">
                        <TranslateInput
                            content={this.state.content}
                            onClear={this.onClear.bind(this)}
                            onInput={this.onInput.bind(this)} />
                    </div>
                    <div className="translate-right">
                        <TranslateOutput output={this.props.output}/>
                    </div>
                </div>

                <TranslateHistory/>
            </div>
        );
    }
}

export default Home;

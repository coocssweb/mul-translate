import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

class TranslateOutput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showSource: false
        };
    }

    onToggleDoublelang () {
        this.setState((prevState, props) => ({
            showSource: !prevState.showSource
        }));
    }

    render () {
        return (
            <div className="translateOutput">
                <div className="translateOutput-content">
                    <p className={className({'translateOutput-source': true, 'translateOutput-source--show': this.state.showSource})}>{ this.props.output.source }</p>
                    <p className="translateOutput-target">{ this.props.output.target }</p>
                </div>
                <div className="translateOutput-operate">
                    <a href="javascript:;" className="translateOutput-btn translateOutput-sound">
                        <i className="icon icon-sound"></i>
                    </a>
                    <a href="javascript:;" className="translateOutput-btn translateOutput-copy">
                        <i className="icon icon-copy"></i>
                    </a>
                    <div className="translateOutput-doublelang">
                        <a href="javascript:;" onClick={this.onToggleDoublelang.bind(this)}>双语对照
                            <span><i className={className({'icon': true, 'icon-opcheck': !this.state.showSource, 'icon-opchecked': this.state.showSource})}></i></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

TranslateOutput.propTypes = {
    output: PropTypes.object,
};

export default TranslateOutput;

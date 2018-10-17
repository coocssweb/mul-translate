import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

class TranslateInput extends Component {
    render () {
        return (
            <div className="translateInput">
                <div className="translateInput-content">
                    <textarea
                        placeholder="请输入文字"
                        value={this.props.content}
                        className="translateInput-textarea"
                        onChange={this.props.onInput.bind(this)}>
                    </textarea>
                </div>
                <a href="javascript:;"
                   className={className({'translateInput-clear': true, 'translateInput-clear--show': !!this.props.content})}
                   onClick={this.props.onClear.bind(this)}>
                </a>
                <div className="translateInput-operate">

                </div>
            </div>
        );
    }
}

TranslateInput.propTypes = {
    content: PropTypes.string,
    onInput: PropTypes.func,
    onClear: PropTypes.func
};

export default TranslateInput;

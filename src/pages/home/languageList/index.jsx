import React, {Component} from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

class LanguageList extends Component {
    render () {
        return (
            <div className={className({'languageList': true, 'languageList--open': this.props.open})}>
                <div className="languageList-cover"></div>
                <ul className="languageList-often clearfix">
                    <li className="languageList-often-item languageList-often-text">-常用语种</li>
                    {
                        this.props.languageOften.map((item) => {
                            return (
                                <li className='languageList-often-item'
                                    key={item.id}>
                                    <a href="javascript:void(0);"
                                       className={className({'languageList-often-lang': true, 'languageList-often-lang--selected': item.id === this.props.language.id})}
                                       value={item.id} onClick={this.props.onSelect.bind(this, item)}>{ item.name }</a>
                                </li>
                            );
                        })
                    }
                </ul>
                <ul className="languageList-data">
                    {
                        this.props.languageList.map((item) => {
                            return (
                                <li className='languageList-data-item'
                                    key={item.id}>
                                    <a href="javascript:void(0);"
                                       className={className({'languageList-data-lang': true, 'languageList-data-lang--selected': item.id === this.props.language.id})}
                                       value={item.id}
                                       onClick={this.props.onSelect.bind(this, item)}>{ item.name }</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

LanguageList.propTypes = {
    open: PropTypes.bool,
    languageList: PropTypes.array,
    languageOften: PropTypes.array,
    language: PropTypes.object,
    onSelect: PropTypes.func,
};

export default LanguageList;

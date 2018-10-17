/**
 * Created by zj-db0666 on 2018/10/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TranslateHistory extends Component {
    render () {
        return (
            <div className="translateHistory">
                <div className="translateHistory-header">

                </div>
                <div className="translateHistory-content">

                </div>
            </div>
        );
    }
}

TranslateHistory.propTypes = {
    historyList: PropTypes.array
};

export default TranslateHistory;

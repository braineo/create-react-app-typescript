import * as React from 'react';
import { connect } from 'react-redux';
import {getEntries} from "../actions";
import {IStoreState} from "../typings";
import App from './App'

interface IProps {
    entries: string[]
    onGetEntries: () => void
}

class RootView extends React.Component<IProps, {}> {
    public componentDidMount() {
        this.props.onGetEntries()
    }
    public render() {
        return (
            <div>
                <App/>
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        entries: state.entries
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    onGetEntries: () => dispatch(getEntries())
});


export default connect(mapStateToProps, mapDispatchToProps)(RootView);

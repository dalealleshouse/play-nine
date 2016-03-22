// @flow
import * as React from "react";

type DoneFrameProperties = {
    doneStatus: string;
    resetGame(): void;
}

export class DoneFrame extends React.Component {
    props: DoneFrameProperties;
    state: {};

    render() {
        return (
            <div className="well text-center">
                <h2>{this.props.doneStatus}</h2>
                <button className="btn btn-default" onClick={this.props.resetGame}>Play again</button>
            </div>
        );
    }
}

// @flow
import * as React from "react";

type AnswerFrameProperties = {
    selectedNumbers: number[];
    unselectNumber(num: number): void;
}

export class AnswerFrame extends React.Component {
    props: AnswerFrameProperties;
    state: {};
    
    render() {
        let numbers = this.props
            .selectedNumbers
            .map((i) => (
                <span key={i}
                    onClick={this.props.unselectNumber.bind(null, i) }>
                    {i}
                </span>));

        return (
            <div id="answer-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }
}

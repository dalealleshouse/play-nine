// @flow
import * as React from "react";

type NumberFrameProperties = {
    selectedNumbers: number[];
    usedNumbers: number[];
    selectNumber: (num: number) => void;
}

export class NumbersFrame extends React.Component {
  props: NumberFrameProperties;
  state: {};
    render() {
      // $FlowFixMe: suppressing this error until we can refactor
        let numbers: React$Element[] = Array.apply(null, Array(9))
            .map((n: void, i: number) => i + 1)
            .map((i: number) => (
                <div key={i}
                    onClick={this.props.selectNumber.bind(null, i) }
                    className={this.getNumberClassName(this.props.selectedNumbers, this.props.usedNumbers, i) }>
                    {i}
                </div>));

        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbers}
                </div>
            </div>
        );
    }

    getNumberClassName(selectedNumbers: number[], usedNumbers: number[], num: number): string {
        // $FlowFixMe: suppressing this error until we can refactor
        return `number selected-${selectedNumbers.contains(num)} used-${usedNumbers.contains(num)}`;
    }
}

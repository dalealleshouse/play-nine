// @flow weak
import * as React from "react";

type StarsFrameProps = {
  numberOfStars: number;
}

export class StarsFrame extends React.Component {
  props : StarsFrameProps;
  state : {};
  render() {
    // nifty hack to make a repeater that can be mapped over
    // $FlowFixMe: suppressing this error until we can refactor
    let stars : Element[] = Array.apply(null, Array(this.props.numberOfStars)).map((n : void, i : number) => (
      <span key={i} className="glyphicon glyphicon-star"></span>
    ));

    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    );
  }
}

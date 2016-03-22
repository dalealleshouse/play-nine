// @flow
export {}

// $FlowFixMe: suppressing this error until we can refactor
Array.prototype.contains = function(o) {
    return this.indexOf(o) >= 0;
};

// $FlowFixMe: suppressing this error until we can refactor
Array.prototype.remove = function(o) {
    let i = this.indexOf(o);

    if (i >= 0) this.splice(i, 1);
    return this;
};

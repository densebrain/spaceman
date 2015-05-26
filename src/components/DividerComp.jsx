import React from 'react';

export default class DividerComp extends React.Component {

  getContainerStyle(size, sizeMode) {

    var flex, width = '100%', height = '100%';

    if (sizeMode === 'fix') {

      if (this.props.direction === 'row') {

        width = size + 'px';
      }
      else {
        height = size + 'px';
      }
    }
    else if (sizeMode === 'flex') {

      flex = size;
    }

    return {
      flex, width, height,
      // border:'solid 1px black',
      position: 'relative',
      // background: getColor(),
    };
  },

  _getFlexPerPx() {

    var br = this.getDOMNode().getBoundingClientRect();
    var fullPx = this.props.direction === 'row' ? br.width : br.height;
    var fullFlex = 0;

    this.props.childModels.forEach(function (child) {

      if (child.sizeMode === 'fix') {

        fullPx -= child.size;
      }
      else {
        fullFlex += child.size;
      }
    });

    return fullFlex / fullPx;
  },

  render() {

    var _prevChild;
    var children = React.Children.map(this.props.children, (child, idx) => {

      var size = child.props.size;
      var sizeMode = child.props.sizeMode;
      var contStyle = this.getContainerStyle(size, sizeMode);
      var resizer;

      if (idx > 0 && child.props.resizeable &&  _prevChild.props.resizeable) {

        let prevChildSize = _prevChild.props.size;

        resizer = <ResizerComp
          onDown={() => ({
            idx,
            flexPerPx: this._getFlexPerPx(),
            prevChildSize: prevChildSize,
            nextChildSize: size,
          })}
          direction={this.props.direction}
          onDrag={md => this.props.onDragResizer(md)}/>;
      }

      _prevChild = child;

      return <div style={contStyle} key={idx}>
        {child}
        {resizer}
      </div>;
    });

    var s = {
      display: 'flex',
      position: 'absolute',
      flexDirection: this.props.direction,
      width: '100%',
      height: '100%',
      background: style.grey.normal,
    };

    return <div style={s}>
      {children}
    </div>;
  }
}
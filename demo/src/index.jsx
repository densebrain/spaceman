var React = require('react');
var {Spaceman, Tab, Block, Divider} = require('../../src/index');
var {style} = require('react-matterkit');

var FakeHierarchy = require('./FakeHierarchy.jsx');
var JVDemo = require('./JVDemo.jsx');
var Toolbar = require('./Toolbar.jsx');

// var cw = console.warn;
// console.warn = function () {debugger;cw.apply(this, arguments);};

// React.render(<div>allo</div>, document.body);

var View = React.createClass({
  render() {
    return <div style={{
      width:'100%',
      height:'100%',
      backgroundColor: style.palette.purple,
    }}/>;
  }
});


var structure = {type: 'divider', direction: 'row', children: [
  {type: 'divider', direction: 'column', size: 5, children: [
    {type: 'block', size: 32, sizeMode: 'fix', resizeable: false, children: [
      {type: 'tab', id: 'toolbar', hideableHead: true},
    ]},
    {type: 'divider', children: [
      {type: 'divider', direction: 'row', children: [
        {type: 'block', size: 1, children: [
          {type: 'tab', id: 'history', label: 'History', content: 'History'},
          {type: 'tab', id: 'project', label: 'Project', content: 'Project'},
          {type: 'tab', id: 'color', label: 'Color', content: 'Color'},
        ]},
        {type: 'block', size: 2, children: [
          {type: 'tab', id: 'view', label: 'View', content: <View/>},
        ]},
      ]}
    ]},
  ]},
  {type: 'block', size: 2, children: [
    {type: 'tab', id: 'controlls', label: 'Controlls Demo', content: <JVDemo/>},
    {type: 'tab', id: 'behaviours', label: 'Behaviours', content: 'Behaviours'},
    {type: 'tab', id: 'tree', label: 'Tree', content: 'Tree'},
  ]}
]};

React.render(<Spaceman defaultStructure={structure}/>,
  document.querySelector('#root'));

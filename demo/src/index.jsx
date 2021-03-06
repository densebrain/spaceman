var React = require('react/addons');
var { PureRenderMixin } = React.addons;
var Spaceman = require('../../');
var {style} = require('react-matterkit');
var JsonVision = require('json-vision');

var FakeHierarchy = require('./FakeHierarchy.jsx');
var JVDemo = require('./JVDemo.jsx');
var Toolbar = require('./Toolbar.jsx');
var Test = require('./Test.jsx');
var createEditor = require('./createEditor');

// var cw = console.warn;
// console.warn = function () {debugger;cw.apply(this, arguments);};

// React.render(<div>allo</div>, document.body);

var view = <div style={{
  width:'100%',
  height:'100%',
  backgroundColor: style.palette.purple,
}}>view</div>;


var structure = {type: 'divider', direction: 'row', children: [
  {type: 'divider', direction: 'column', size: 5, children: [
    {type: 'block', size: 32, sizeMode: 'fix', resizeable: false, children: [
      {type: 'tab', id: 'toolbar', hideableHead: true},
    ]},
    {type: 'divider', children: [
      {type: 'divider', direction: 'row', children: [
        {type: 'block', size: 1, children: [
          {type: 'tab', id: 'model', label: 'Model'},
          {type: 'tab', id: 'project', label: 'Project', content: 'Project'},
          {type: 'tab', id: 'color', label: 'Colors', content: 'Color'},
        ]},
        {type: 'block', size: 2, children: [
          {type: 'tab', id: 'view', label: 'View', content: view},
        ]},
      ]}
    ]},
  ]},
  {type: 'block', size: 2, children: [
    {type: 'tab', id: 'controlls', label: 'Controlls Demo', content: '<JVDemo/>'},
    {type: 'tab', id: 'behaviours', label: 'Behaviours', content: 'Behaviours'},
    {type: 'tab', id: 'tree', label: 'Tree', content: 'Tree'},
  ]}
]};

var spaceman = React.render(<Spaceman defaultStructure={structure}/>,
  document.querySelector('#react-mount'));


spaceman.setTabContent('model', createEditor(spaceman));
// spaceman.setTabContent('model', <Test/>);
// spaceman.setTabContent('controlls', <JVDemo/>);

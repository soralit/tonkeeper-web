import{r as c,aB as E,az as g,ay as x,ax as p,eE as m}from"./index-z3CvngUh.js";function b(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function h(n,i){var a=function(t){return i&&c.isValidElement(t)?i(t):t},o=Object.create(null);return n&&c.Children.map(n,function(e){return e}).forEach(function(e){o[e.key]=a(e)}),o}function M(n,i){n=n||{},i=i||{};function a(f){return f in i?i[f]:n[f]}var o=Object.create(null),e=[];for(var t in n)t in i?e.length&&(o[t]=e,e=[]):e.push(t);var r,l={};for(var u in i){if(o[u])for(r=0;r<o[u].length;r++){var s=o[u][r];l[o[u][r]]=a(s)}l[u]=a(u)}for(r=0;r<e.length;r++)l[e[r]]=a(e[r]);return l}function d(n,i,a){return a[i]!=null?a[i]:n.props[i]}function C(n,i){return h(n.children,function(a){return c.cloneElement(a,{onExited:i.bind(null,a),in:!0,appear:d(a,"appear",n),enter:d(a,"enter",n),exit:d(a,"exit",n)})})}function V(n,i,a){var o=h(n.children),e=M(i,o);return Object.keys(e).forEach(function(t){var r=e[t];if(c.isValidElement(r)){var l=t in i,u=t in o,s=i[t],f=c.isValidElement(s)&&!s.props.in;u&&(!l||f)?e[t]=c.cloneElement(r,{onExited:a.bind(null,r),in:!0,exit:d(r,"exit",n),enter:d(r,"enter",n)}):!u&&l&&!f?e[t]=c.cloneElement(r,{in:!1}):u&&l&&c.isValidElement(s)&&(e[t]=c.cloneElement(r,{onExited:a.bind(null,r),in:s.props.in,exit:d(r,"exit",n),enter:d(r,"enter",n)}))}}),e}var F=Object.values||function(n){return Object.keys(n).map(function(i){return n[i]})},T={component:"div",childFactory:function(i){return i}},v=function(n){E(i,n);function i(o,e){var t;t=n.call(this,o,e)||this;var r=t.handleExited.bind(b(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var a=i.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(e,t){var r=t.children,l=t.handleExited,u=t.firstRender;return{children:u?C(e,l):V(e,r,l),firstRender:!1}},a.handleExited=function(e,t){var r=h(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(l){var u=g({},l.children);return delete u[e.key],{children:u}}))},a.render=function(){var e=this.props,t=e.component,r=e.childFactory,l=x(e,["component","childFactory"]),u=this.state.contextValue,s=F(this.state.children).map(r);return delete l.appear,delete l.enter,delete l.exit,t===null?p.createElement(m.Provider,{value:u},s):p.createElement(m.Provider,{value:u},p.createElement(t,l,s))},i}(p.Component);v.propTypes={};v.defaultProps=T;const O=v;export{O as T};

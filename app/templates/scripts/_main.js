<% if (includejQuery2 || includejQuery3) { %>import {} from './external/jquery';<% } -%>
<% if (includeBootstrap) { %>
// Import only bootstrap packages you need
// import {} from 'bootstrap/js/dist/alert';
// import {} from 'bootstrap/js/dist/button';
// import {} from 'bootstrap/js/dist/carousel';
// import {} from 'bootstrap/js/dist/collapse';
// import {} from 'bootstrap/js/dist/dropdown';
// import {} from 'bootstrap/js/dist/modal';
// import {} from 'bootstrap/js/dist/popover';
// import {} from 'bootstrap/js/dist/scrollspy';
// import {} from 'bootstrap/js/dist/tab';
// import {} from 'bootstrap/js/dist/toast';
// import {} from 'bootstrap/js/dist/tooltip';
// Or import everything
import {} from 'bootstrap'; // eslint-disable-line import/imports-first
<% } -%>
<% if (includeFoundation) { %>
import {} from 'foundation-sites'; // eslint-disable-line import/imports-first
<% } -%>
import { sayHello } from './modules/utils';

<% if (includeFoundation) { -%>
$(document).foundation();
<% } -%>

sayHello();

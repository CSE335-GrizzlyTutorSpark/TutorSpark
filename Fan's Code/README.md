# TutorSpark
Collab environment for CSE 335 TutorSpark Application


A brief description:
get meteor from https://www.meteor.com/install
and do
Cd materialize-iron-router
meteor 
to start the server, where locale page will be display on localhost:3000


Brief Structure description:(from meteor documentation, we don't have to follow it)

client

Any directory named client is not loaded on the server. Similar to wrapping your code in if (Meteor.isClient) { ... }. All files loaded on the client are automatically concatenated and minified when in production mode. In development mode, JavaScript and CSS files are not minified, to make debugging easier. (CSS files are still combined into a single file for consistency between production and development, because changing the CSS file's URL affects how URLs in it are processed.)

HTML files in a Meteor application are treated quite a bit differently from a server-side framework. Meteor scans all the HTML files in your directory for three top-level elements: <head>, <body>, and <template>. The head and body sections are separately concatenated into a single head and body, which are transmitted to the client on initial page load.

server

Any directory named server is not loaded on the client. Similar to wrapping your code in if (Meteor.isServer) { ... }, except the client never even receives the code. Any sensitive code that you don't want served to the client, such as code containing passwords or authentication mechanisms, should be kept in the server directory.

Meteor gathers all your JavaScript files, excluding anything under the client, public, and private subdirectories, and loads them into a Node.js server instance. In Meteor, your server code runs in a single thread per request, not in the asynchronous callback style typical of Node. We find the linear execution model a better fit for the typical server code in a Meteor application.

public

All files inside a top-level directory called public are served as-is to the client. When referencing these assets, do not include public/ in the URL, write the URL as if they were all in the top level. For example, reference public/bg.png as <img src='/bg.png' />. This is the best place for favicon.ico, robots.txt, and similar files.

private

All files inside a top-level directory called private are only accessible from server code and can be loaded via the Assets API. This can be used for private data files and any files that are in your project directory that you don't want to be accessible from the outside.

tests

Any directory named tests is not loaded anywhere. Use this for any local test code.

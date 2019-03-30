const placeholder = `# Markdown Previewer with React 

## Sub Heading Level
### And a sub-sub-heading

We've got some **bold text** or _italics_ if that's more your speed.
But how about **_both!_**. Spicyyy

And cross out just incase you make a ~~mistkaee~~ mistake.

\`console.log("React is amazing") \\Here's some code in backtics \`

\`\`\`
//Multi-line code with triple backtics

function justReact() = {
  console.log("Why aren't you reacting yet?")
}
\`\`\`

You can make a [link](https://codepen.io/jeffogah/) 

> Blockquotes if you wish 

-And lastly
  -You can list 
    - if you want to  
      - indented or otherwise
1. If you don't like bullets
- Then numbers are just perfect for you

Let's close with this awesome react logo
![React Logo w/ Text](https://goo.gl/Umyytc)
`;

//Enable Line breaks with return
marked.setOptions({
  breaks: true });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a";
};

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }

  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "window" },
      React.createElement("div", { className: "window-header" }, React.createElement("b", null, React.createElement("i", { className: "fas fa-edit" }), " EDITOR")),
      React.createElement("textarea", {
        id: "editor",
        onChange: this.handleChange,
        value: this.state.markdown })),


      React.createElement("div", { className: "window" },
      React.createElement("div", { className: "window-header" }, React.createElement("b", null, React.createElement("i", { className: "fas fa-desktop" }), " PREVIEW")),
      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: marked(this.state.markdown, { renderer: renderer }) } }))));





  }}


ReactDOM.render(React.createElement(Presentation, null), document.getElementById("app"));
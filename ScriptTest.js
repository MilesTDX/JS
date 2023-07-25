var styles = `
h1 { 
  display: block;
  font-size: 5em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

button { 
  display: block;
  font-size: 5em;
  font-weight: bold;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

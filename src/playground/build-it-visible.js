const appRoot = document.getElementById("app");

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    const { visibility } = this.state;
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
          <p>Hey. These are some details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, appRoot);


// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <p>Hey. These are some details you can now see!</p>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();

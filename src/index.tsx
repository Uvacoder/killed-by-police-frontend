import { render, Component } from 'inferno';

import './Main.css';

const container = document.getElementById('app');

class Index extends Component<any, any> {
  render() {
    return (
      <div>a test 2</div>
    );
  }
}
render(<Index />, container);

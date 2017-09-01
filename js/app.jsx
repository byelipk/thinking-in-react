import '../css/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import DATA from '../data.json';

import { groupBy } from './utils';

class ProductRow extends React.Component {
  render() {
    return (
      <tr className={(!this.props.product.stocked ? '' : 'out-of-stock')}>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class CategoryRow extends React.Component {
  render() {
    const term = this.props.filterTerm;
    const stocked = this.props.filterStocked;

    const children =
      this.props.category.children
        .filter((product) => {
          if (stocked) {
            return !product.stocked;
          }
          return true;
        })
        .filter((product) => {
          if (term) {
            const regexp = new RegExp(term, 'i');
            return product.name.match(regexp);
          }
          return true;
        })
        .map(child => {
          return (<ProductRow key={child.name} product={child} />);
        });

    return (
      <tbody className="category">
        <tr><td>{this.props.category.name}</td></tr>
        {children}
      </tbody>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const categories =
      this.props.productCategories
        .map(category => (
          <CategoryRow
            filterTerm={this.props.filterTerm}
            filterStocked={this.props.filterStocked}
            key={category.key}
            category={category} /> ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {categories}
      </table>
    );
  }
}

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <input
          onInput={this.props.oninput}
          value={this.props.filterTerm}
          type="text"
          placeholder="Search..." />
        <input
          onChange={this.props.onchange}
          type="checkbox"
          checked={this.props.filterStocked} />
        <span>Only show products in stock</span>
      </form>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.onFilterTermChange = this.onFilterTermChange.bind(this);
    this.onFilterStockedChange = this.onFilterStockedChange.bind(this);

    this.state = {
      filterTerm: '',
      filterStocked: false,
      productCategories: []
    }
  }

  onFilterTermChange(event) {
    this.setState({filterTerm: event.target.value});
  }

  onFilterStockedChange(stocked) {
    this.setState({filterStocked: !this.state.filterStocked});
  }

  componentDidMount() {
    const stuff = groupBy(DATA, "category");
    const productCategories = Object.keys(stuff).map(key =>  {
      return Object.assign({}, { key: key, name: key, children: stuff[key] })}
    );

    this.setState({productCategories: productCategories});
  }

  render() {
    return (
      <div>
        <SearchForm
          filterTerm={this.state.filterTerm}
          filterStocked={this.state.filterStocked}
          oninput={this.onFilterTermChange}
          onchange={this.onFilterStockedChange} />

        <ProductTable
          productCategories={this.state.productCategories}
          filterTerm={this.state.filterTerm}
          filterStocked={this.state.filterStocked} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

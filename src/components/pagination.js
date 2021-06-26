import './pagination.css';

import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Pajination extends Component {
 
  constructor(props) {
    super(props);
    console.log(props);

    this.pageCount = props.pageCount;
    this.marginPagesDisplayed = props.marginPagesDisplayed == null ? 1 : props.marginPagesDisplayed;
    this.pageRangeDisplayed = props.pageRangeDisplayed == null ? 2 : props.pageRangeDisplayed;
    this.onPageChange = props.onPageChange;
    this.perPage = props.perPage;

    this.state = {
      forcePage: 0
    }

    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;

    this.setState({
      forcePage: selectedPage
    });

    this.props.onPageChange(selectedPage, this.props.perPage)
  };

  render() {
    return (
      <div className="pajination-menu">
        <ul className="start-end-buttons"><li key="000420"><button onClick={() => this.handlePageClick({ selected: 0 })}>Início</button></li></ul>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={this.props.marginPagesDisplayed}
          pageRangeDisplayed={this.props.pageRangeDisplayed}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={this.state.forcePage} />
        <ul className="start-end-buttons"><li key="000420"><button onClick={() => this.handlePageClick({ selected: this.props.pageCount - 1 })}>Fim</button></li></ul>
      </div>
    );
  }
}

export default Pajination;
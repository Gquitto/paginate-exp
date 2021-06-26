import React, { Component } from 'react'
import axios from 'axios'
import Pagination from './components/pagination'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      perPage: 10,
      currentPage: 0
    };
  }

  receivedData(selectedPage, perPage) {
    const offset = selectedPage * perPage;
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <React.Fragment>
          <p>{pd.title}</p>
          <img src={pd.thumbnailUrl} alt="" />
        </React.Fragment>)

        this.setState({
          pageCount: Math.ceil(data.length / perPage),
          postData
        })
      });
  }
 
  componentDidMount() {
    this.receivedData(0, this.state.perPage)
  }

  render() {
    return (
      <div>
        {this.state.postData}
        <Pagination
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={this.receivedData.bind(this)}
          perPage={this.state.perPage}
        />
      </div>

    )
  }
}
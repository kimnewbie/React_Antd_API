import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import "antd/dist/antd.css";
import './App.css';

function App() {

  const [ loading, setLoading ] = useState(false)
  const [ dataSource, setDataSource ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ pageSize, setPageSize ] = useState(10)

  useEffect( () => {

    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
      setDataSource(data)
    }).catch(err => {
      console.log(err)
    }).finally( () => {
      setLoading(false)
    })

  }, [])
  const columns = [
    { 
      key: "1",
      title: 'ID',
      dataIndex: 'id'
    },
    { 
      key: "2",
      title: 'User ID',
      dataIndex: 'userId',
      sorter: (record1, record2) => {
        return record1.userId > record2.userId
      }
    },
    { 
      key: "3",
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed? 'Completed' : 'In Progress'}</p>
      },
      filters: [
        {text:'Completed', value: true},
        {text:'In Progress', value: false}
      ],
      onFilter: (value, record) => {
        return record.completed === value
      }
    },
  ]
  return (
    <div className="App"> 
      <div className="App-header"> 
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: 500,
            onChange:(page,pageSize) => {
              setPage(page);
              setPageSize(pageSize)
              //Make the api call here with page and page size
            }
          }}
        >
        </Table>
      </div>  
    </div>
  );
}

export default App;

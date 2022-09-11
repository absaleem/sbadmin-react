import React from "react";
import DataTable from "react-data-table-component";
import Employees from "./Employees";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

const columns = [
    {
      id: 1,
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      reorder: true
    },
    {
      id: 2,
      name: "Director",
      selector: (row) => row.director,
      sortable: true,
      reorder: true
    },
    {
      id: 3,
      name: "Runtime (m)",
      selector: (row) => row.runtime,
      sortable: true,
      right: true,
      reorder: true
    }
  ];
  
  
function Tables(){
    return (
            <>
                     <div id="wrapper">
    <Sidebar/>  
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
       <Topbar/>
     
            <div class="container-fluid">

<h1 class="h3 mb-2 text-gray-800">Tables</h1>
<p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
    For more information about DataTables, please visit the <a target="_blank"
        href="https://datatables.net">official DataTables documentation</a>.</p>

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
        <DataTable
          title="Movies"
          columns={columns}
          data={Employees}
          defaultSortFieldId={1}
          pagination
          selectableRows
        />
        </div>
    </div>
</div>

</div>
<Footer/>
    </div> 
       </div> 
    </div>
            </>

    );
}

export default Tables;
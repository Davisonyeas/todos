import React from 'react'


const TaskList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Done</th>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><input className="form-control" type="checkbox" value="Completed" /></th>
                        <td>Start Programming</td> 
                        <td className="d-flex justify-content-between">
                            <input className="form-control" type="button" value="Edit" />
                            <input className="form-control" type="button" value="Delete" />
                            
                        </td>
                    </tr>
                    <tr>
                        <th><input className="form-control" type="checkbox" value="Completed" /></th>
                        <td>Write Codes</td>
                        <td className="d-flex justify-content-between">
                            <input className="form-control" type="button" value="Edit" />
                            <input className="form-control" type="button" value="Delete" />
                        </td>
                        
                    </tr>
                    <tr>
                        <th><input className="form-control" type="checkbox" value="Completed" /></th>
                        <td>Continue Programming</td>
                        <td className="d-flex justify-content-between">
                            <input className="form-control" type="button" value="Edit" />
                            <input className="form-control" type="button" value="Delete" />
                            
                        </td>
                        
                    </tr>
                </tbody>
            </table>
                </div>
            </div>
            
        </div>
    )
}


export default TaskList

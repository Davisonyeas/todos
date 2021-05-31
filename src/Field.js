import React from 'react'


const Field = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form>
                    <div className="d-flex justify-content-center">
                        <input className="form-control w-75 text-center" type="text" placeholder="Write your Task Here!" />
                        <input className="btn btn-primary" type="button" value="Add"/>
                    </div>
                    
                </form>
            </div>
            </div>
            
        </div>
    )
}



export default Field

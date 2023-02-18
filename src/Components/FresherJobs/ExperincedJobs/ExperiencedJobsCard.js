import React from 'react';
import PrivateRoute from '../../../Router/PrivateRoute/PrivateRoute';

const ExperiencedJobsCard = ({ job }) => {
    const { company, position, location } = job;
    return (
        <div className="card my-10 bg-slate-300 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Company Name:{company}</h2>
                <p>Position Name :{position}</p>
                <p>Location :{location}</p>
                <div className="card-actions justify-end">
                    <PrivateRoute>
                        <button className="btn btn-primary">Apply</button>
                    </PrivateRoute>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedJobsCard;
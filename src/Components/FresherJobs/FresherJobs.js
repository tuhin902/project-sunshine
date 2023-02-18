import React, { useEffect, useState } from 'react';
import FresherJobsCard from './FresherJobsCard';

const FresherJobs = () => {
    const [fresherJobs, setFresherJobs] = useState([]);
    // console.log(fresherJobs);

    useEffect(() => {
        fetch('http://localhost:4000/fresherjobs')
            .then(res => res.json())
            .then(data => setFresherJobs(data));
    }, []);
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5
            '>Fresher Jobs</h2>
            {
                fresherJobs.map(job => <FresherJobsCard key={job._id} job={job}></FresherJobsCard>)
            }

        </div>
    );
};

export default FresherJobs;
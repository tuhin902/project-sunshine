import React, { useEffect, useState } from 'react';
import ExperiencedJobsCard from './ExperiencedJobsCard';

const ExperiencedJobs = () => {
    const [experiencedJobs, setExperiencedJobs] = useState([]);
    console.log(experiencedJobs);

    useEffect(() => {
        fetch('http://localhost:4000/fresherjobs')
            .then(res => res.json())
            .then(data => setExperiencedJobs(data));
    }, []);
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5
            '>Fresher Jobs</h2>
            {
                experiencedJobs.map(job => <ExperiencedJobsCard key={job._id} job={job}></ExperiencedJobsCard>)
            }
        </div>
    );
};

export default ExperiencedJobs;
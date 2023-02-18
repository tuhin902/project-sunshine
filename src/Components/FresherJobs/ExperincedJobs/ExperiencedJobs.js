import React, { useEffect, useState } from 'react';
import ExperiencedJobsCard from './ExperiencedJobsCard';

const ExperiencedJobs = () => {
    const [experiencedJobs, setExperiencedJobs] = useState([]);
    console.log(experiencedJobs);

    useEffect(() => {
        fetch('https://sunshine-server-tuhin902.vercel.app/experiencedjobs')
            .then(res => res.json())
            .then(data => setExperiencedJobs(data));
    }, []);
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-5
            '>Experienced Jobs</h2>
            {
                experiencedJobs.map(job => <ExperiencedJobsCard key={job._id} job={job}></ExperiencedJobsCard>)
            }
        </div>
    );
};

export default ExperiencedJobs;
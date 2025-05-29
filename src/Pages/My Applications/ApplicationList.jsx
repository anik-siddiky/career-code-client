import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);
    return (
        <div>
            <h3 className="text-4xl">Job applied so far: {applications.length}</h3>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    No
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <JobApplicationRow index={index} key={application._id} application={application}></JobApplicationRow>)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default ApplicationList;
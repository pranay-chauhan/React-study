import React from 'react';

class emp extends React.Component {
    constructor() {
        super();
        this.state = {
            employee: [
                { name: "Mohan", sal: 1300, age: 34 },
                { name: "Rohan", sal: 1600, age: 28 },
                { name: "Jagmohan", sal: 1700, age: 29 },
                { name: "Sohan", sal: 1800, age: 19 }
            ]
        }
    }
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        {
                            this.state.employee.map((emp) => {
                                return (
                                    <tr>
                                        <td>{emp.name}</td>
                                        <td>{emp.sal}</td>
                                        <td>{emp.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
            </div>
        )
    }
}
export default emp
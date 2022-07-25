import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
{/*import LogoutComponent from './LogoutComponent';*/}

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

                employees: []
        }
        this.logoutClicked=this.logoutClicked.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.applyLeaveEmployee=this.applyLeaveEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    applyLeaveEmployee(id){
        this.props.history.push(`/apply-leave-employee/${id}`)
        alert("Your leave request is submitted!!");
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    logoutClicked() {
        
        this.props.history.push(`/`);
    }
    
    render() {
        return (
            <div>
                <style>{'body { background-color: white; }'}</style>
                <br></br>
                
                 <h2 className="text-center"><b>Employees List</b></h2>

                 <div class = "container">
                    <button type="button" className="btn btn-primary float-left" onClick={this.addEmployee}> Add Employee</button>
                    <button type="button" className="btn btn-danger float-right" onClick={this.logoutClicked}>Logout</button>
                </div>

                 <br></br>
                 <div>
                    <p><br></br></p>
                 </div>
                
                 <div className = "row">
                        
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr align="center" color="blue">
                                    <th> <h4><font color="purple"><b>Employee First Name</b></font></h4></th>
                                    <th> <h4><font color="purple"><b>Employee Last Name</b></font></h4></th>
                                    <th> <h4><font color="purple"><b>Employee Email ID</b></font></h4></th>
                                    <th> <h4><font color="purple"><b>Actions</b></font></h4></th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> <b>{ employee.firstName} </b></td>   
                                             <td> <b>{employee.lastName}</b></td>
                                             <td> <b>{employee.emailId}</b></td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.applyLeaveEmployee(employee.id)} className="btn btn-success">Apply Leave</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListEmployeeComponent
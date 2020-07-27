import React, { Component } from 'react';
import './addUser.css';
import { connect } from 'react-redux';
// import AddUser from './addUser';
import { saveUserDetails, save_edit_data } from '../../store/Action.js'

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {

      buttonText: 'Add New User',
      editableData: {},
      // isShowUser: false,
      users: this.props.showUserDetail,
    }
    this.currentItemIndex = undefined;
  }

  handleChange = (name) => event => {
    event.preventDefault();
    this.setState({
      [name]: event.target.value.trim()
    })
  }

  handleSave = () => {
    let saveDetails = {
      name: this.state.name,
      designation: this.state.designation,
      skills: this.state.skills
    }
    if (saveDetails.name == undefined ||
      saveDetails.designation == undefined ||
      saveDetails.skills == undefined) {
      window.alert("Please fill required data with respect to their fields");
      return
    }
    this.props.saveUserDetails(saveDetails);

  }

  toggleUser = () => {
    this.setState({
      isShowUser: !this.state.isShowUser,
      buttonText: this.state.isShowUser ? 'Add New User' : 'Hide User',
      isShowEditUser: false
    })
  }

  setEditable = (item) => {
    console.log(item)
    this.setState({
      isShowEditUser: true, //!this.state.isShowEditUser,
      isShowUser: false,
      buttonText: 'Add New User',
      editableData: { ...item }
    })

  }

  handleChange_edit = (event) => {
    event.preventDefault();
    let changeData = { ...this.state.editableData }
    changeData[event.target.name] = event.target.value;
    this.setState({ editableData: changeData });
    // console.log(changeData);
  }

  edit_Save = () => {
    let save_editData = this.state.editableData
    this.props.save_edit_data(save_editData, this.currentItemIndex);
    // console.log(save_editData);
  }


  render() {

    const { buttonText, isShowUser, isShowEditUser } = this.state;
    const showUserDetail = this.props.showUserDetail;

    // console.log("this.props", showUserDetail, "render ran");
    // console.log(showUserDetail);

    return (
      <div style={{ marginTop: '20px' }}>
        <button style={{ width: '200px', marginBottom: '20px' }} onClick={this.toggleUser}>{buttonText}</button>

        <hr />
        <div>
          {
            isShowUser
            &&
            <div style={{ marginBottom: '20px' }}>

              <h2>Add New User</h2>
              <div className="container">
                <input type="text" name="name" onChange={this.handleChange('name')} placeholder="Your name.." required />
                <input type="text" name="designation" onChange={this.handleChange('designation')} placeholder="Your Designation" required />
                <input type="text" name="skills" onChange={this.handleChange('skills')} placeholder="Your Skills" required />
                <button onClick={this.handleSave}>Save</button>
              </div>
            </div>
          }
        </div>

        <div>
          {
            isShowEditUser
            &&
            <div style={{ marginBottom: '20px' }}>
              <h2>Edit User</h2>
              <div className="container" >
                <input type="text" name="name" onChange={this.handleChange_edit} value={this.state.editableData.name} placeholder="Your name.." />
                <input type="text" name="designation" onChange={this.handleChange_edit} value={this.state.editableData.designation} placeholder="Your Designation" />
                <input type="text" name="skills" onChange={this.handleChange_edit} value={this.state.editableData.skills} placeholder="Your Skills" />
                <button onClick={this.edit_Save}>Edit Save</button>
              </div>
            </div>
          }
        </div>

        {
          showUserDetail.map((item, index) => (
            <div className="card" key={item.id}>
              <h1><a href="javascript:void(0)" onClick={e => { this.currentItemIndex = index; this.setEditable(item) }}>{item.name}</a></h1>
              <p className="title">{item.designation} </p>
              <p>{item.skills}</p>
              <p><button key={item.id} onClick={() => this.props.delItems(item.id)}>Delete</button></p>
              {/* <p><button style={{color: 'yellow'}}  onClick={this.setEditable.bind(this,showUserDetail)}>Edit User</button></p> */}
            </div>
          ))
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state.userDetailsIs);
  return {
    showUserDetail: state.userDetailsIs
  }
};

const mapDispachToProps = (dispatch) => {
  return {
    saveUserDetails: (saveDetails) => dispatch(saveUserDetails(saveDetails)),
    delItems: (id) => dispatch({ type: "Del_Item", key: id }),
    save_edit_data: (save_editData, index) => dispatch(save_edit_data(save_editData, index))
  }
};

export default connect(mapStateToProps, mapDispachToProps)(Users);
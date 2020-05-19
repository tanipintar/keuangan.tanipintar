import React, { Component } from 'react'
import Router from 'next/router'
//import moment from 'moment';
import Link from 'next/link'
import Layout from '../components/layout';
import firebase from "./db";

export default class extends Component {
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this);
  }   

  static async getInitialProps({ query }) {
    const docRef = await firebase.firestore().collection("harga").doc(query.id).get();
    const harga = docRef.data();
    return { 
        id: docRef.id,
        harga
    }
  }
  componentWillMount() {
    this.setState({
      id: this.props.id,
      nama: this.props.harga.nama,
      qty: this.props.harga.qty,
      harga: this.props.harga.harga,
    })
  };
  handleChange (evt) {
    // This triggers everytime the input is changed
    this.setState({
        [evt.target.name]: evt.target.value,
    });
  };
  
  async handleSubmit (evt) {
    evt.preventDefault();
    const docRef = await firebase.firestore().collection("harga").doc(this.state.id).update({
        nama:this.state.nama,
        qty:this.state.qty,
        harga:this.state.harga,
       
    }).then(()=>{
        alert("Data telah disimpan")
        Router.push('/tabelharga')
    }).catch((error)=>{
        alert("Gagal mengupdate data");
    });
  };
  
  render() {
    return (
      <Layout >
        <ol class="breadcrumb">
           <li class="breadcrumb-item">
             <a href="#">Dashboard</a>
           </li>
           <li class="breadcrumb-item active">Edit Daftar Harga</li>
         </ol>
        <div className="row">
            <div className="col-lg-12">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Edit Harga</h5>
                        <div className="ibox-tools">
                        </div>
                    </div>
                    <div className="ibox-content">
                        <form onSubmit={this.handleSubmit} className="form-horizontal" >

                          <div className="form-group">
                            <label className="col-sm-2 control-label">Nama</label>
                            <div className="col-sm-10 col-md-6 col-lg-6" >
                              <input type="text" name="nama" className="form-control" value={this.state.nama} onChange={this.handleChange} />
                            </div>
                          </div>

                          

                          <div className="form-group">
                            <label className="col-sm-2 control-label">Qty</label>
                            <div className="col-sm-10 col-md-6 col-lg-6" >
                              <input type="text" name="qty" className="form-control" value={this.state.qty} onChange={this.handleChange} />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-sm-2 control-label">Harga</label>
                            <div className="col-sm-10 col-md-6 col-lg-6" >
                              <input type="text" name="harga" className="form-control" value={this.state.harga} onChange={this.handleChange} />
                            </div>
                          </div>

                          <div className="hr-line-dashed"></div>

                          <div className="form-group">
                              <div className="col-sm-4 col-sm-offset-2 m-b">
                                  <Link href={{ pathname: '/tabelharga' }}><a className="btn btn-danger"><i className="fa fa-times"></i> Batal</a></Link>
                                  <button style={{marginLeft: 10}} className="btn btn-primary" type="submit"><i className="fa fa-save"></i> Simpan</button>
                              </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
}

import React, { Component } from 'react'
//import moment from 'moment';
import Link from 'next/link'
import Layout from '../components/layout'
import firebase from '../lib/db';

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dthrg: [],
    }
 
  }

  static async getInitialProps() {

    const snapshot = await firebase.firestore().collection("harga").get()
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        data: doc.data()
      }
    });
    var harga = data;
    console.log(harga.length);
   
    return { harga }
  }

  GetData = async function () {
    const snapshot = await firebase.firestore().collection("harga").get()
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        data: doc.data()
      }
    });
    this.setState({
      loading: false,
      dthrg: data
    })
  }

  async Hapus(id) {
  
    if (confirm('Yakin ingin menghapus data?')) {
      const snapshot = await firebase.firestore().collection("harga").doc(id).delete().then(() => {
        alert("Data telah dihapus");
        this.GetData();
      }).catch((error) => {
        alert("Gagal menghapus data");
      });
    }
  }
  componentDidMount() {
    this.setState({
      dthrg: this.props.harga
    })
  }

  render() {
    return (

      <Layout>

        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Daftar Harga</li>

        </ol>


        <div className="row">
          <div className="col-lg-12">
            <Link href={{ pathname: '/tambah' }}><a className="btn btn-primary hidden-xs pull-right"><i className="fa fa-plus"></i> {this.state.loading ? 'menunggu' : 'Tambah Data'} </a></Link>
          </div>
          <hr style={{ margin: 10 }} />
        </div>

        <div class="card mb-3">
          <div class="card-header">

          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Nama</th>
                        <th className="text-center">Qty</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Opsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.dthrg.length != 0 ?
                          this.state.dthrg.map((dt, key) => {
                            return (
                              <tr key={key}>
                                <td className="text-center">{key + 1}</td>
                                <td>{dt.data.nama}</td>
                                <td className="text-center">{dt.data.qty}</td>
                                <td className="text-center">{dt.data.harga}</td>
                                <td className="text-center">
                                  <Link href={{ pathname: '/edit', query: { id: dt.id } }}><a className="btn btn-primary btn-xs" title="Edit Data" ><i className="fa fa-edit"></i></a></Link>
                                  <button className="btn btn-danger btn-xs" title="Hapus Data" onClick={this.Hapus.bind(this, dt.id)} ><i className="fa fa-trash"></i></button>
                                </td>
                              </tr>
                            )
                          }
                          )
                          : (
                            <tr><td colSpan="7" className="text-center">Tidak ada data daftar harga</td></tr>
                          )
                      }
                    </tbody>

                  </table>

                </div>
              </div>
            </div>

          </div>
        </div>



      </Layout>

    )


  }
}
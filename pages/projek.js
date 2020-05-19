import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import firebase from './db';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            dthrg: [],
        }

    }
    static async getInitialProps() {

        const snapshot = await firebase.firestore().collection("Projek").get()
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
        const snapshot = await firebase.firestore().collection("Projek").get()
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
                                                <th className="text-center">No</th>
                                                <th className="text-center">Nama Pemilik Lahan</th>
                                                <th className="text-center">Nama Projek</th>
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
                                                                <td>{dt.data.Nama_Pemilik_Lahan}</td>
                                                                <td className="text-center">{dt.data.Nama_Projek}</td>
                                                                <td className="text-center">
                                                                    <Link href={{ pathname: '/panen', query: { id: dt.id } }}><a className="btn btn-primary btn-xs" title="Data Panen" ><i className="fa fa-edit"></i></a></Link>

                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    )
                                                    : (
                                                        <tr><td colSpan="7" className="text-center">Tidak ada data daftar Projek</td></tr>
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
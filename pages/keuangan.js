import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Keuangan = () => (
  <Layout>
 <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Keuangan</li>
        </ol>

<div class="card mb-3">
          <div class="card-header">
            <i class="fas fa-table"></i>
            Data Keuangan</div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nama Projek</th>
                    <th>Nama Pemilik</th>
                    <th>Luas Lahan</th>
                    <th>Nama Agenda</th>
                    <th>HST</th>
                    <th>Tanggal</th>
                    <th>Alamat</th>
                    <th>Nutrisi</th>
                    <th>Harga</th>
                    <th>Jumlah Nutrisi</th>
                    <th>Jenis Pekerjaan</th>
                    <th>Harga/Orang</th>
                    <th>Jumlah Pekerja</th>
                    <th>Total Nutrisi</th>
                    <th>Total Pekerja</th>
                    <th>Sub Total</th>
                    <th>Action</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Penanaman</td>
                    <td>Halimin</td>
                    <td>1Ha</td>
                    <td>Pemupukan</td>
                    <td>01</td>
                    <td>2019-10-12</td>
                    <td>Ketapang</td>
                    <td>Poc</td>
                    <td>6000</td>
                    <td>18btl</td>
                    <td>Penyiangan</td>
                    <td>45000</td>
                    <td>2</td>
                    <td>108000</td>
                    <td>90000</td>
                    <td>198000</td>
                    <td>
                    <a className="btn btn-sm btn-primary" href='/formubahNotifikasi'>
                        <i class="fas fa-fw fa-edit"></i> </a>
                        <a className="btn btn-sm btn-primary" href='/'>
                        <i class="fas fa-fw fa-check"></i> </a>
                    </td>
                    <td>Sudah Bayar</td>
                  </tr>
               
                </tbody>
              </table>
            </div>
          </div>
         
        </div>

  </Layout>
)

export default Keuangan
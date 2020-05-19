import React from 'react'
import Link from 'next/link'

const Sidebar = () => (


<ul class="sidebar navbar-nav">
  <li class="nav-item active">
    <a class="nav-link" href='/dasbor'>
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span>
    </a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link" href='/notifikasi' >
      <i class="fas fa-fw fa-bell"></i>
      <span>Notifikasi</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/keuangan'>
      <i class="fas fa-fw fa-folder"></i>
      <span>Keuangan</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/panen'>
      <i class="fas fa-fw fa-folder"></i>
      <span>Panen</span></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/tabelharga'>
      <i class="fas fa-fw fa-table"></i>
      <span>Tabel Harga<a href></a></span>
      </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/laporan'>
      <i class="fas fa-fw fa-table"></i>
      <span>Laporan <a href></a></span>
      </a>
  </li>
</ul>


)
export default Sidebar
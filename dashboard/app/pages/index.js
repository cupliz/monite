import { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../store'
import BoxTitle from "../components/box/box1-title";
import BoxWaktu from "../components/box/box2-waktu";
import BoxRunText from "../components/box/box8-runtext";

import Home from "../components/page/home";
import Jadwal from "../components/page/jadwal";
import Info from "../components/page/info";
import Nilai from "../components/page/nilai";
import Pengajar from "../components/page/pengajar";
import FloatMenu from '../components/float-menu'

class Index extends Component {
  state = {
    page: '/',
    title: {
      jadwal: 'Jadwal Pelajaran',
      info: {
        info1: 'Info Sekolah',
        info2: 'Info Siswa'
      },
      nilai: 'Nilai Ujian',
      pengajar: 'Daftar Pengajar'
    },
    icon: {
      jadwal: 'av_timer',
      info: { info1: 'school', info2: 'face' },
      nilai: 'business',
      pengajar: 'folder_shared'
    },
    data: {
      jadwal: [],
      info1: [],
      info2: [],
      nilai: [],
      pengajar: [],
      runtext: ''
    }
  }
  getData = async () => {
    console.warn('Get data from server...')
    const result = await axios({
      url: 'http://localhost:5000/',
      method: 'post',
      headers: { 'Authorization': `Basic ${btoa('admin:admin')}` },
      data: {
        query: `
            query {
              info1: info(filter:{ cat: "hmj" }){ id,cat,info },
              info2: info(filter:{ cat: "kmp" }){ id,cat,info },
              config: config(filter:{ aktif: 1 }){ id, value }
            }
          `
      }
    })
    const { data } = result.data
    console.log(data)
    this.setState({ data: { ...data } })
  }
  componentDidMount = () => {
    this.getData()
  }
  redirect = (page) => {
    this.setState({ page })
  }
  autoRedirect = (page, time) => {
    this.waiting = setTimeout(() => {
      this.setState({ page })
    }, time * 1000)
  }
  renderHome = () => {
    const { page, icon, title, data } = this.state
    if (page === '/') {
      clearTimeout(this.waiting)
      this.autoRedirect('/jadwal', 30)
      return (<Home redirect={this.redirect} icon={icon} title={title} data={data} />)
    }
    if (page === '/jadwal') {
      clearTimeout(this.waiting)
      this.autoRedirect('/info', 3)
      return (<Jadwal redirect={this.redirect} icon={icon.jadwal} title={title.jadwal} data={data} />)
    }
    if (page === '/info') {
      clearTimeout(this.waiting)
      this.autoRedirect('/nilai', 3)
      return (<Info redirect={this.redirect} icon={icon.info} title={title.info} data={data} />)
    }
    if (page === '/nilai') {
      clearTimeout(this.waiting)
      this.autoRedirect('/pengajar', 3)
      return (<Nilai redirect={this.redirect} icon={icon.nilai} title={title.nilai} data={data} />)
    }
    if (page === '/pengajar') {
      clearTimeout(this.waiting)
      this.autoRedirect('/', 3)
      return (<Pengajar redirect={this.redirect} icon={icon.pengajar} title={title.pengajar} data={data} />)
    }
  }

  render() {
    return (
      <div className="body">
        <div className="row">
          <div className="col s12 m8">
            <BoxTitle redirect={this.redirect} />
          </div>
          <div className="col s12 m4">
            <BoxWaktu />
          </div>
        </div>
        <div className="row">
          {this.renderHome()}
          <FloatMenu />
        </div>
        <div className="row">
          <div className="col s12 m12">
            <BoxRunText />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { login } = state
  return { login }
}
export default connect(mapStateToProps)(Index)
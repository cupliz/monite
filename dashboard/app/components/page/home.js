import { Component } from 'react'
import BoxInfo1 from '../box/box4-info'
import BoxInfo2 from '../box/box5-info'
import BoxJadwal from '../box/box3-jadwal'
import BoxNilai from "../box/box6-nilai";
import BoxPengajar from "../box/box7-pengajar";
export default class Home extends Component {
 
  render() {
    const { title, icon, redirect, data } = this.props
    const {info1,info2} = data
    return (
      <div>
        <div className="col s12 m3">
          <BoxJadwal title={title.jadwal} icon={icon.jadwal} redirect={redirect} />
        </div>
        <div className="col s12 m6">
          <div className="row">
            <div className="col s12 m12">
              <BoxInfo1 title={title.info.info1} icon={icon.info.info1} redirect={redirect} data={info1}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12">
              <BoxInfo2 title={title.info.info2} icon={icon.info.info2} redirect={redirect} data={info2}/>
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="row">
            <div className="col s12 m12">
              <BoxNilai title={title.nilai} icon={icon.nilai} redirect={redirect} />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12">
              <BoxPengajar title={title.pengajar} icon={icon.pengajar} redirect={redirect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
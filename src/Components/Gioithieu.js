import React, { Component } from 'react';

class Gioithieu extends Component {
    render() {
        return (
            <div>
                <div className='container hang'>
                    <div className='row'>
                        <div className='col-xs-3 '>
                        <div className="card sanpham1" style={{ width: 240 }}>
                            <img
                                className="card-img-top gioithieu "
                                src="https://gshock.casio.com/content/casio/locales/vn/vi/brands/gshock/_jcr_content/root/responsivegrid/container_1481262412/container/container_1404634349/container/container/image.casiocoreimg.png/1677718041713/mtg-b2000bd-1a4.png"
                                alt="Card image"
                                style={{ width: "100%" }}
                            />
                            <div className="card-body gioithieu">
                                <h4 className="card-title text-xs-center">MT-G</h4>

                            </div>
                </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Gioithieu;
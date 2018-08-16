import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='col-12 col-md-6 mb-4'>
                <div className='card border-info mb-3'>
                    <div className='card-header text-white bg-info'>City Info </div>
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row'>
                                <p>CITY NAME:</p>
                            </div>
                            <div className='row'>
                                <p>LAT/LONG:</p>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Temperature</h6>
                                    <p>stuff</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Pressure</h6>
                                    <p>stuff</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Humidity</h6>
                                    <p>stuff</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Lowest Temp</h6>
                                    <p>stuff</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Highest Temp</h6>
                                    <p>stuff</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Wind Speed</h6>
                                    <p>stuff</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { weatherData } = this.props;
        if (!weatherData) {
            return (
            <div className='col-12 col-md-6 mb-4'>
                <div className='card border-primary mb-3'>
                    <div className='card-header text-primary alert-primary'>City Info </div>
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row'>
                                <p>CITY NAME:</p>
                            </div>
                            <div className='row'>
                                <p>LAT:</p>
                                <p>LON:</p>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Temperature</h6>
                                    <p></p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Pressure</h6>
                                    <p></p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Humidity</h6>
                                    <p></p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Lowest Temp</h6>
                                    <p></p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Highest Temp</h6>
                                    <p></p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Wind Speed</h6>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        
        return (
            <div className='col-12 col-md-6 mb-4'>
                <div className='card border-primary mb-3'>
                    <div className='card-header text-primary alert-primary'>City Info </div>
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row alert-primary'>
                                <p>CITY NAME:{weatherData.name}</p>
                            </div>
                            <div className='row alert-primary'>
                                <p>LAT:{weatherData.coord.lat}</p>
                                <p>LON:{weatherData.coord.lon}</p>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Temperature</h6>
                                    <p>{weatherData.main.temp}</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Pressure</h6>
                                    <p>{weatherData.main.pressure}</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Humidity</h6>
                                    <p>{weatherData.main.humidity}</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Lowest Temp</h6>
                                    <p>{weatherData.main.temp_min}</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Highest Temp</h6>
                                    <p>{weatherData.main.temp_max}</p>
                                </div>
                                <div className='col-4 text-center'>
                                    <h6 className='h6 strong'>Wind Speed</h6>
                                    <p>{weatherData.wind.speed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

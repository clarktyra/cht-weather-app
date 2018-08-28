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
                <div className='card border-success mb-3'>
                    <div className='card-header text-success alert-success'>City Info </div>
                    <div className='card-body'>
                    <div className='container'>
                            <div className='row '>
                                <p>CITY NAME:</p>
                            </div>
                            <div className='row '>
                                <p>LAT/LON:</p>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-lg-4 text-center'>Temperature:</div>
                                <div className='col-lg-4 text-center'>Pressure: </div>
                                <div className='col-lg-4 text-center'>Humidity: </div>
                            
                            </div>
                            <div className='row'>
                                <div className='col-lg-4 text-center'>Lowest Temp:</div>
                                <div className='col-lg-4 text-center'>Highest Temp:</div>
                                <div className='col-lg-4 text-center'>Wind Speed:</div>
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
                    <div className='card-header text-success alert-success'>City Info </div>
                    <div className='card-body'>
                        <div className='container'>
                            <div className='row '>
                                <p>CITY NAME:{weatherData.name}</p>
                            </div>
                            <div className='row '>
                                <p>LAT/LON:{weatherData.coord.lat}, {weatherData.coord.lon}</p>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col-lg-4 text-center alert-primary'>Temperature:{weatherData.main.temp}</div>
                                <div className='col-lg-4 text-center'>Pressure: {weatherData.main.pressure}</div>
                                <div className='col-lg-4 text-center'>Humidity: {weatherData.main.humidity}</div>
                            
                            </div>
                            <div className='row'>
                                <div className='col-lg-4 text-center alert-success'>Lowest Temp:{weatherData.main.temp_min}</div>
                                <div className='col-lg-4 text-center alert-success'>Highest Temp:{weatherData.main.temp_max}</div>
                                <div className='col-lg-4 text-center'>Wind Speed:{weatherData.wind.speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

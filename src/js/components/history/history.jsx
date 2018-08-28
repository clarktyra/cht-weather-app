import React from 'react';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            time: null
        }
    }
    // renderSearches() {
    //      const {prevSearch.map((value,indux) =>{
    //         {
    //         return (
    //             <div className='row'>
    //             <p>City: {this.city} </p>
    //             <p className="date-time">Time: {this.time} </p>
    //             <p className="date-time">Date: {this.date} </p>
    //             </div>
    //         );
    //      });
    // }

    render() {
        const { history } = this.props;
        if (history) {
            console.log(history)
            return (
                // <div className='col-12 col-md-6 mb-4'>
                //     <div className='card border-info mb-3'>
                //         <div className='card-header text-white bg-info'>Search History </div>
                //         <div className='card-body'>
                //            {this.renderSearches()}
                //         </div>
                //     </div>
                // </div>
                <div className='col-12 col-md-6 mb-8'>
                    <div className='card border-success'>
                        <div className='card-header text-success alert-success'> Search History </div>
                        <div className='card-body'>
                            <table className="table table-striped">
                                <tbody>
                                {history.map(item => (
                                        <tr key={item.date + item.time}>
                                            <td>{item.name}</td>
                                            <td><span></span></td>
                                            <td className='text-right'><p className='mb-0'><small>{item.date},<br />{item.time}</small></p></td>
                                            <hr/>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else {
            <div className='col-12 col-md-6 mb-8'>
            <div className='card border-success'>
                <div className='card-header text-success alert-success'> Search History </div>
                <div className='card-body'>
                    <table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        }
    }
}

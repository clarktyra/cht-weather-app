import {connect} from 'react-redux';
import History from './history';

function mapStoreToProps(store) {
    return {
        city: store.navbar.city,
        history: store.navbar.history,
        weatherData: store.navbar.weatherData
    };
}
export default connect(mapStoreToProps)(History);